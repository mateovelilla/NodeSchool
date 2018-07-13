'use strict'

let fs = require('fs'),
	http = require('http'),
	path = require('path'),
	port = process.argv[2],
	direction = process.argv[3],
	file
let server = http.createServer((request,response) => {
	file = fs.createReadStream(path.resolve(__dirname, direction))
	file.pipe(response)
})
server.listen(port)
