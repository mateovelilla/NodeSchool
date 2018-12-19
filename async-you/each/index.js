'use strict';
const Async = require('async');
const http = require('http');
let urlOne = process.argv[2];
let urlTwo = process.argv[3];
Async.each([urlOne,urlTwo],function(item,done) {
	http.get(item,(res) => {
		let body='';
		res.on('data',(chunk)=>body+=chunk.toString())
		res.on('end',()=> {
			return done(null)
		})
	}).on('error', function(err){
		done(err);
	});

},(err)=>{
	if(err) console.error(err);
})