'use strict';
const Async = require('async');
const http = require('http');
Async.map([process.argv[2],process.argv[3]],(item, done)=>{
	http.get(item,(res) => {
		let body = '';
		res.on('data',(chunk)=> body+= chunk.toString())
		res.on('end',()=>done(null,body))
	})
},(err,results)=>console.log(results))