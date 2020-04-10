var moment  = require('moment');
var fs = require('fs');
var http = require('http');
var pdfreader = require("pdfreader");


export default (req, res) => {

	const path = 'https://www1.nyc.gov/assets/doh/downloads/pdf/imm/covid-19-daily-data-summary-04092020-2.pdf';

	/*
	// new pdfreader.PdfReader().parseFileItems(path, function(err, item) {
	// 	if (err) callback(err);
	// 	else if (!item) callback();
	// 	else if (item.text) console.log(item.text);
	// });

	var options = {
	    method: 'GET',
	   	host: 'localhost',
	    port: '3000',
	    path: path
	  };

	var request = http.request(options, function(response) { 
	  var data = []; 

	  response.on('data', function(chunk) { 
	    data.push(chunk);
	  }); 

	  response.on('end', function() { 
	    data = Buffer.concat(data); // do something with data 

	    //console.log(data);

	    new pdfreader.PdfReader().parseBuffer(data, function(err, item) {
		    if (err) console.error(err);
		    else if (!item) console.error('no item');
		    else if (item.text) console.log(item.text);
		});


	    // const output = parse(data, new pdfreader.PdfReader());
     //  	const outputString = JSON.stringify(output, null, 2);

     //  	console.log(outputString);
	  }); 
	}); 

	request.end();

	*/

	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify({ data: [
		{
			heading: `Region of the Americas`,
			body: `417 416 confirmed (33 174) 12 597 deaths (1500)`
		},
		{
			heading: `Western Pacific Region`,
			body: `114 667 confirmed (1026) 3922 deaths (30)`
		},
		{
			heading: `Eastern Mediterranean Region`,
			body: `81 993 confirmed (3428) 4314 deaths (165)`
		},
		{
			heading: `South-East Asia Region`,
			body: `10 707 confirmed (1575) 426 deaths (64)`
		},
		{
			heading: `African Region`,
			body: `7647 confirmed (555) 326 deaths (32)`
		},
		{
			heading: `WHO RISK ASSESSMENT`,
			body: `Global Level Very High`
		}

	] }))
}