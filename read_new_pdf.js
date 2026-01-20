
const fs = require('fs');
const PDFParser = require("pdf2json");

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    console.log(pdfParser.getRawTextContent());
});

pdfParser.loadPDF("/Users/cheolahnjung/Downloads/에코바이오/ecobio_company_int_2026.pdf");
