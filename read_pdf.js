const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('/Users/cheolahnjung/ecofade/k-bioplastic/ecofade_web_edit_251121.pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
});
