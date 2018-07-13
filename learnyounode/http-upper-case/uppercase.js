'use strict'

let http = require('http'),
	port = process.argv[2],
	map = require('through2-map')

let server = http.createServer(function (req , res){
	if(req.method == 'POST'){
		req.pipe(map(function (chunk){
			return chunk.toString()
				.toUpperCase()
		}))
		.pipe(res);
	}else{
		req.end();
	}
}).listen(port);

