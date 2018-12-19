'use strict'
const sync = require('async');
const fs = require('fs');
const http = require('http');
const path = require('path');
const file = process.argv[2];
sync.waterfall([
    function (cb) {
			let contentFile = fs.readFileSync(path.resolve(__dirname, file));
			cb(null,contentFile)
		},
		function(url,cb) {
			url = url.toString()
			let body='';
			http.get(url,(res)=> {
				res.on('data',(chunk)=> body+=chunk.toString())
				res.on('end',()=>console.log(body))
			})
		}
])