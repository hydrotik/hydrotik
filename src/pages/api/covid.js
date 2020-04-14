var moment  = require('moment');
var fs = require('fs');
var http = require('http');
var https = require('https');
var pdf = require('pdf-parse');


//TODO Convert to promises
//TODO Implement caching of PDF to reduce http request
//TODO Format PDF output


let lastSuccessfulDate = null;

function getPDF(path, res){
	pdf(path).then(function(data) {
		// number of pages
		// console.log(data.numpages);
		// number of rendered pages
		// console.log(data.numrender);
		// PDF info
		// console.log(data.info);
		// PDF metadata
		// console.log(data.metadata); 
		// PDF.js version
		// check https://mozilla.github.io/pdf.js/getting_started/
		// console.log(data.version);
		// PDF text
		// console.log(data.text); 

		let lines = data.text.split("\n")

		lines = lines.slice(15, 40)


		res.statusCode = 200
		res.setHeader('Content-Type', 'application/json')
		res.end(JSON.stringify({ data: lines, success: true}))

	});
}



export default (req, res) => {

	const today = moment().format('MMDDYYYY');
	const yesterday = moment().add(-1, 'days').format('MMDDYYYY');

	const root = 'https://www1.nyc.gov/assets/doh/downloads/pdf/imm/';
	const filePrefix = 'covid-19-daily-data-summary-';
	const fileSuffix = '-1.pdf';

	// First run
	if(!lastSuccessfulDate) lastSuccessfulDate = today;

	// We assume that if there isn't a today, there will always be a yesterday
	https.get(root + filePrefix + lastSuccessfulDate + fileSuffix, function(r) {
		if(r.statusCode === 404){
			// If today doesn't work, then we need to use yesterday
			if(lastSuccessfulDate === today) lastSuccessfulDate = yesterday;
		}else{
			// If today works, use today
			lastSuccessfulDate = today;
		}
		// Get the PDF with a working url
		getPDF(root + filePrefix + lastSuccessfulDate + fileSuffix, res);
	}).on('error', function(e) {
		console.error(e);
	});
}