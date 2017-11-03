"use strict";
/*jslint todo: true, regexp: true, browser: true, unparam: true */
/*global Promise */
var Handsontable = require('handsontable');
var Papa = require('papaparse');

var dataObject = Papa.parse([
    "Year,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,,",
    "Catch,43457,33899,15.28,4941,48827,6864,5472,43884,35527,34005,18881,9924,18919,,",
    "Abundance index,2211,1911,1955,1725,1.56,1424,1277,1.1,935,804,613,499,353,,",
    "Duration t,13,,,,,,,,,,,,,,",
    "Average catch over time t,23.03074512,,,,,,,,,,,,,,",
    "Depletion over time t,0.180710371,,,,,,,,,,,,,,",
    "M,0.13,,,,,,,,,,,,,,",
    "FMSY/M,0.5,,,,,,,,,,,,,,",
    "BMSY/B0,0.35,,,,,,,,,,,,,,",
    "MSY,NA,,,,,,,,,,,,,,",
    "BMSY,NA,,,,,,,,,,,,,,",
    "Length at 50% maturity,84.13,,,,,,,,,,,,,,",
    "Lenght at 95% maturity,110.03,,,,,,,,,,,,,,",
    "Length at first capture,15.21,,,,,,,,,,,,,,",
    "Length at full selection,60.21,,,,,,,,,,,,,,",
    "CAA 2008,0,1,20,74,70,28,34,15,6,0,2,0,1,0,0",
    "CAA 2009,0,0,19,74,66,41,24,9,2,0,1,0,0,0,0",
    "CAA 2010,0,0,23,67,59,32,28,5,5,0,0,0,0,0,0",
    "Current stock depletion,297,,,,,,,,,,,,,,",
    "Current stock abundance,66465,,,,,,,,,,,,,,",
    "Von Bertalanffy K parameter,168,,,,,,,,,,,,,,",
    "Von Bertalanffy Linf parameter,155.23,,,,,,,,,,,,,,",
    "Von Bertalanffy t0 parameter,-0.45,,,,,,,,,,,,,,",
    "Length-weight parameter a,0.000006,,,,,,,,,,,,,,",
    "Length-weight parameter b,3154,,,,,,,,,,,,,,",
    "Steepness,513,,,,,,,,,,,,,,",
    "Maximum age,15,,,,,,,,,,,,,,",
    "CV Catch,0.2,,,,,,,,,,,,,,",
    "CV Depletion over time t,221,,,,,,,,,,,,,,",
    "CV Average catch over time t,221,,,,,,,,,,,,,,",
    "CV Abundance index,362,,,,,,,,,,,,,,",
    "CV M,0.4,,,,,,,,,,,,,,",
    "CV FMSY/M,0.2,,,,,,,,,,,,,,",
    "CV BMSY/B0,45,,,,,,,,,,,,,,",
    "CV current stock depletion,0.35,,,,,,,,,,,,,,",
    "CV current stock abundance,0.35,,,,,,,,,,,,,,",
    "CV von B. K parameter,0.1,,,,,,,,,,,,,,",
    "CV von B. Linf parameter,0.05,,,,,,,,,,,,,,",
    "CV von B. t0 parameter,0.1,,,,,,,,,,,,,,",
    "CV Length at 50% maturity,0.2,,,,,,,,,,,,,,",
    "CV Length at first capture,0.2,,,,,,,,,,,,,,",
    "CV Length at full selection,0.2,,,,,,,,,,,,,,",
    "CV Length-weight parameter a,0.1,,,,,,,,,,,,,,",
    "CV Length-weight parameter b,0.1,,,,,,,,,,,,,,",
    "CV Steepness,0.1,,,,,,,,,,,,,,",
    "Sigma length composition,0.2,,,,,,,,,,,,,,",
    "Units,thousand tonnes,,,,,,,,,,,,,,",
    "Reference OFL,NA,,,,,,,,,,,,,,",
    "Reference OFL type,NA,,,,,,,,,,,,,,",
    "CAL_bins,0,20,40,60,80,100,120,140,160,180,,,,,",
    "CAL 1998,0,2,10,11,21,9,10,14,6,,,,,,",
    "CAL 1999,0,1,25,19,11,19,11,8,6,,,,,,",
    "CAL 2000,0,1,18,22,16,7,16,7,8,,,,,,",
    "CAL 2001,0,2,21,9,12,11,10,9,5,,,,,,",
    "CAL 2002,0,1,28,19,22,9,13,7,12,,,,,,",
    "CAL 2003,0,1,15,25,20,18,12,9,8,,,,,,",
    "CAL 2004,0,2,23,17,10,18,7,7,5,,,,,,",
    "CAL 2005,0,2,27,25,17,8,12,2,3,,,,,,",
    "CAL 2006,0,2,11,23,15,10,11,5,1,,,,,,",
    "CAL 2007,0,1,17,25,17,14,11,6,2,,,,,,",
    "CAL 2008,0,1,10,33,18,8,8,2,1,,,,,,",
    "CAL 2009,0,2,29,42,8,12,6,5,0,,,,,,",
    "CAL 2010,0,1,15,35,10,13,7,0,0,,,,,,",
    "MPrec,NA,,,,,,,,,,,,,,",
    "LHYear,2010,,,,,,,,,,,,,,",
].join("\n"), {});
console.log(dataObject);

var colHeaders = dataObject.data.shift();
colHeaders.shift();
var rowHeaders = dataObject.data.map(function (row) {
    return row.shift();
});

var hot = new Handsontable(document.querySelector('#hot'), {
    data: dataObject.data,
    stretchH: 'all',
    autoWrapRow: true,
    maxRows: 22,
    rowHeaders: rowHeaders,
    rowHeaderWidth: 270,
    colHeaders: colHeaders,
});
