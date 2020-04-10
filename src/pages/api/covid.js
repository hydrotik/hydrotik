var moment  = require('moment');
var fs = require('fs');
var http = require('http');
var pdfreader = require("pdfreader");


export default (req, res) => {
	// TODO Data source collation with caching
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify({ data: [], success: true}))
}