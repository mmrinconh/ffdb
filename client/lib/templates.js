"use strict";
/*jslint todo: true */

var dlmtool = [
    {
        name: "metadata",
        title: {
            "en": "Data description",
            "es": "Descripción de los datos",
        },
        description: {
            "en": " " +
                "Please fill the form with all the data available for your " +
                "stock, if you are not sure about the value of some category " +
                "please enter 'NA'. If a field heading is underlined " +
                "you can hover over for a more detailed description." +
                '<br/><br/>' +
                "Based on DLMtool package " +
                "(Tom Carruthers and Adrian Hordyk (2016). DLMtool: Data-Limited " +
                "Methods Toolkit. R package version 3.1. " +
                "<a href=\"https://CRAN.R-project.org/package=DLMtool\">https://CRAN.R-project.org/package=DLMtool</a>)." +
                '<br/><br/>' +
                'Once saved go to the <a href="/shiny/ffdb-dlmtool/">FFDB DLMtool page</a> to view results.',
            "es": " " +
                "Rellene el formulario con todos los datos disponibles para su stock. " +
                "Si no está seguro del valor de alguna categoría, ingrese 'NA'. " +
                "Si el encabezado de un campo está subrayado, " +
                "puede desplazarse para obtener una descripción más detallada." +
                '<br/><br/>' +
                "Basado en el paquete DLMtool " +
                "(Tom Carruthers and Adrian Hordyk (2016). DLMtool: Data-Limited " +
                "Methods Toolkit. R package version 3.1. " +
                "<a href=\"https://CRAN.R-project.org/package=DLMtool\">https://CRAN.R-project.org/package=DLMtool</a>)." +
                '<br/><br/>' +
                'Una vez guardado, vaya a la <a href="/shiny/ffdb-dlmtool/">página FFDB DLMtool</a> para ver los resultados.',
        },
        orientation: "vertical",
        fields: [
            {name: "species", title: {"en": "Species", "es": "Especies"}},
            {name: "location", title: {"en": "Location", "es": "Ubicación"}},
            {name: "case_study", title: {"en": "Case study", "es": "Caso de estudio"}},
        ],
        values: [{name: "value", title: {"en": "Value", "es": "Valor"}}],
        params: {rowHeaderWidth: 140},
    },
    {
        name: "catch",
        title: {"en": "Catch data", "es": "Datos de captura"},
        description: {
            "en": " " +
                "Catch data should be in tonnes. " +
                "You can include more than one abundance index indicating it in the Abundance Index Max field.",
            "es": " " +
                "Los datos de captura deben ser en toneladas. " +
                "Puede incluir más de un índice de abundancia indicándolo en el campo Índice de abundancia máximo.",
        },
        orientation: "vertical",
        fields: [
            {name: "catch", title: {"en": "Catch", "es": "Captura"}},
            {name: 'abundance_index_1', title: {"en": "Abundance Index", "es": "Indice de Abundancia"}},
        ],
        values: {type: 'year', min: 2000, max: 2010},
        params: {rowHeaderWidth: 170},
    },
    {
        name: "caa",
        title: {"en": "Catch at age", "es": "Atrapar a la edad"},
        description: {
            "en": "Age data should be in numbers.",
            "es": "Los datos de edad deben estar en números.",
        },
        orientation: "horizontal",
        fields: {type: "bins", max: 10},
        values: {type: "year", min: 2000, max: 2010},
    },
    {
        name: "cal",
        title: {"en": "Catch at length", "es": "Atrapar a la longitud"},
        description: {
            "en": "Length data should be in mm.",
            "es": "Los datos de longitud deben estar en mm.",
        },
        orientation: "horizontal",
        fields: {type: "bins", max: 10},
        values: {type: "year", min: 2000, max: 2010, initial: [
            {name: "Min Length", title: {"en": "Min Length", "es": "Longitud mínima"}},
        ]},
        params: {rowHeaderWidth: 100},
    },
    {
        name: "constants",
        title: {"en": "Constants", "es": "Constantes"},
        description: {
            "en": " " +
                "In the 'source' field write for each value a reference source, this " +
                "could be a bibliographic or a database (e.g. www.fishbase.org, " +
                "http://ramlegacy.org) if available. If you do not have a reference " +
                "but you have some knowledge on the value or if a reference does not " +
                "apply please enter 'NA'.",
            "es": " " +
                "En el campo 'fuente', escriba para cada valor una fuente de referencia, " +
                "esto podría ser una bibliografía o una base de datos (por ejemplo, www.fishbase.org, " +
                "http://ramlegacy.org) si está disponible. Si no tiene una referencia pero tiene algún " +
                "conocimiento sobre el valor o si una referencia no se aplica, ingrese 'NA'.",
        },
        orientation: "vertical",
        fields: [
            {name: "avg_catch_over_time", title: 'Average catch over time t'}, // Mean of catch
            {name: "depletion_over_time", title: '<abbr title="Estimated biomass in the last year divided by estimated biomass at the beginning of time series">Depletion over time t</abbr>'},
            {name: "M", title: '<abbr title="Instantaneous natural mortality rate (year⁻¹)">M: Instantaneous natural mortality rate</a>'},
            {name: "FMSY/M", title: 'FMSY/M'},
            {name: "BMSY/B0", title: '<abbr title="The most productive stock size relative to unfished biomass">BMSY/B0</abbr>'},
            {name: "MSY", title: 'MSY'},
            {name: "BMSY", title: 'BMSY'},
            {name: "length_at_50pc_maturity", title: 'Length at 50% maturity'},
            {name: "length_at_95pc_maturity", title: 'Length at 95% maturity'},
            {name: "length_at_first_capture", title: 'Length at first capture'},
            {name: "length_at_full_selection", title: 'Length at full selection'},
            {name: "current_stock_depletion", title: '<abbr title="Biomass today divided by unfished biomass (B0)">Current stock depletion</abbr>'},
            {name: "current_stock_abundance", title: '<abbr title="Estimated abundance today">Current stock abundance</abbr>'},
            {name: "Von_Bertalanffy_K", title: '<abbr title="Growth rate parameter">Von Bertalanffy K parameter</abbr>'},
            {name: "Von_Bertalanffy_Linf", title: 'Von Bertalanffy Linf parameter'},
            {name: "Von_Bertalanffy_t0", title: 'Von Bertalanffy t0 parameter'},
            {name: "Length-weight_parameter_a", title: 'Length-weight param a (W=aLᵇ)'},
            {name: "Length-weight_parameter_b", title: 'Length-weight param b (W=aLᵇ)'},
            {name: "maximum_age", title: 'Maximum age'},
            {name: "ref_ofl_limit", title: '<abbr title="Reference Overfishing limit or reference catch limit e.g. previous catch recommendation">Reference Overfishing/catch limit</abbr>'},
        ],
        values: [
            {name: "value", title: {"en": "Value", "es": "Valor"}},
            {name: "source", title: {"en": "Source", "es": "Fuente"}},
        ],
        params: {rowHeaderWidth: 330},
    },
    {
        name: "cv",
        title: {"en": "Coefficient of variation", "es": "Coeficiente de variación"},
        description: {
            "en": "CV is a measure of imprecision, i.e. how imprecise you think this value could be",
            "es": "CV es una medida de imprecisión, es decir, cuán imprecisa crees que podría ser este valor",
        },
        orientation: "vertical",
        fields: [
            {name: "catch", title: "CV Catch"},
            {name: "depletion_over_time", title: "CV Depletion over time t"},
            {name: "avg_catch_over_time", title: "CV Average catch over time t"},
            {name: "abundance_index", title: "CV Abundance index"},
            {name: "M", title: "CV M"},
            {name: "FMSY/M", title: "CV FMSY/M"},
            {name: "BMSY/B0", title: "CV BMSY/B0"},
            {name: "current_stock_depletion", title: "CV current stock depletion"},
            {name: "current_stock_abundance", title: "CV current stock abundance"},
            {name: "Von_Bertalanffy_K", title: "CV von B. K parameter"},
            {name: "Von_Bertalanffy_Linf", title: "CV von B. Linf parameter"},
            {name: "Von_Bertalanffy_t0", title: "CV von B. t0 parameter"},
            {name: "length_at_50pc_maturity", title: "CV Length at 50% maturity"},
            {name: "length_at_first_capture", title: "CV Length at first capture"},
            {name: "length_at_full_selection", title: "CV Length at full selection"},
            {name: "Length-weight_parameter_a", title: "CV Length-weight parameter a"},
            {name: "Length-weight_parameter_b", title: "CV Length-weight parameter b"},
            {name: "length_composition", title: "Imprecision in length composition data"},
        ],
        values: [
            {name: "value", title: {"en": "Value", "es": "Valor"}},
            {name: "source", title: {"en": "Source", "es": "Fuente"}},
        ],
        params: {rowHeaderWidth: 270},
    },
];

module.exports.table_templates = {
    dlmtool: dlmtool,
};
