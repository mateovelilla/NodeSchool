'use strict'
const http = require('http');
const Async = require('async');
Async.reduce(['one','two','three'],0,(memo, item, done) => {
	http.get(`${process.argv[2]}?number=${item}`,(res) => {
		let body = '';
		res.on('data',(chunk) => body += chunk.toString())
		res.on('end',() => {
			done(null, memo + Number(body))
		})
	})
},(err, result) => {
	if (err) console.log(err);
	console.log(result)
})