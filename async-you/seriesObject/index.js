'use strict';
const http = require('http');
const Async = require('async');
const urlOne = process.argv[2];
const urlTwo = process.argv[3];
Async.series({
	requestOne: function(done) {
		http.get(urlOne,(res) => {
			let body ='';
			res.on('data',(chunk)=> body+=chunk.toString())
			res.on('end',()=>done(null,body))
		})
	},
	requestTwo: function(done) {
		let body= '';
		http.get(urlTwo,(res)=> {
			res.on('data',(chunk)=> body+=chunk.toString())
			res.on('end',()=> done(null,body))
		})
	}
},(err,results)=>{
	console.log(results)
})