'use strict'
const through = require('through2')
const fs = require('fs')
const trumpet = require('trumpet')
let tr = trumpet()
process.stdin.pipe(through(function(buffer,_,next){
	this.push(buffer.toString())
	next()
}))
.pipe(through(function(buffer,_,next){
	console.log(buffer.toString())
}))
/*process.stdin.pipe(tr)
let stream = tr.select('.loud').createStream()
stream.pipe(through(function(buffer,_,next){
	let text = buffer.toString().toUpperCase()
	this.push(text)
	next()
})).pipe(through(function(buffer,_,next){
	stream.end(buffer.toString())
	process.stdout.pipe(stream)
	next()
}))*/
