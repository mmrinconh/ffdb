import unittest

import ffdb.db as db
from tests.requires_postgresql import RequiresPostgresql


class TestDB(RequiresPostgresql, unittest.TestCase):
    def test_documents(self):
        """
        We can store, retrieve and list documents
        """
        with self.cursor() as cursor:
            # Nothing there yet
            self.assertEqual(db.list_documents(cursor, 'tmpl0'), [])
            self.assertEqual(db.list_documents(cursor, 'tmpl1'), [])

            # Store something, there is
            self.assertEqual(db.store_document(cursor, 'tmpl0', 'doc0', "anon", dict(cows=['daisy'])), dict(
                template_name='tmpl0',
                document_name='doc0',
                version=1,
                author="anon",
                content=dict(cows=['daisy']),
            ))
            self.assertEqual(db.list_documents(cursor, 'tmpl0'), [dict(document_name='doc0', latest=1)])
            self.assertEqual(db.list_documents(cursor, 'tmpl1'), [])

            # Get it again
            self.assertEqual(db.get_document(cursor, 'tmpl0', 'doc0'), dict(
                template_name='tmpl0',
                document_name='doc0',
                version=1,
                author="anon",
                content=dict(cows=['daisy']),
            ))

            # Can store new versions
            self.assertEqual(db.store_document(cursor, 'tmpl0', 'doc0', "anom", dict(cows=['daisy', 'freda'])), dict(
                template_name='tmpl0',
                document_name='doc0',
                version=2,
                author="anom",
                content=dict(cows=['daisy', 'freda']),
            ))
            self.assertEqual(db.list_documents(cursor, 'tmpl0'), [dict(document_name='doc0', latest=2)])
            self.assertEqual(db.list_documents(cursor, 'tmpl1'), [])

            # Get it again
            self.assertEqual(db.get_document(cursor, 'tmpl0', 'doc0'), dict(
                template_name='tmpl0',
                document_name='doc0',
                version=2,
                author="anom",
                content=dict(cows=['daisy', 'freda']),
            ))

            # ...or new documents
            self.assertEqual(db.store_document(cursor, 'tmpl0', 'doc1', "agon", dict(pigs=['george'])), dict(
                template_name='tmpl0',
                document_name='doc1',
                version=1,
                author="agon",
                content=dict(pigs=['george']),
            ))
            self.assertEqual(db.list_documents(cursor, 'tmpl0'), [
                dict(document_name='doc0', latest=2),
                dict(document_name='doc1', latest=1),
            ])
            self.assertEqual(db.list_documents(cursor, 'tmpl1'), [])

            # ... with different templates
            self.assertEqual(db.store_document(cursor, 'tmpl1', 'doc0', "amon", dict(pigs=['emily'])), dict(
                template_name='tmpl1',
                document_name='doc0',
                version=1,
                author="amon",
                content=dict(pigs=['emily']),
            ))
            self.assertEqual(db.list_documents(cursor, 'tmpl0'), [
                dict(document_name='doc0', latest=2),
                dict(document_name='doc1', latest=1),
            ])
            self.assertEqual(db.list_documents(cursor, 'tmpl1'), [
                dict(document_name='doc0', latest=1),
            ])
