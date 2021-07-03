'use strict'

let http = require('http'),
	port = process.argv[2],
	map = require('through2-map');

http.createServer(function (req , res){
	if(req.method == 'POST'){
		req
    .pipe(map((chunk)=>chunk.toString().toUpperCase()))
		.pipe(res);
	}else{
		req.end();
	}
}).listen(port);

