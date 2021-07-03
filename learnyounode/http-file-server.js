'use strict'

const fs = require('fs'),
	http = require('http'),
	path = require('path'),
	port = process.argv[2],
	route = process.argv[3];
let file;
let server = http.createServer((request,response) => {
	file = fs.createReadStream(path.resolve(__dirname, route));
	file.pipe(response);
})
server.listen(port);
