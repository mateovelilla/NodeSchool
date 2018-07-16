'use strict'
const through = require('through2')
const trumpet = require('trumpet')
let tr = trumpet()
let loud = tr.select('.loud').createStream()
loud.pipe(through(function(buffer, _, next){
	this.push(buffer.toString().toUpperCase())
	next()
})).pipe(loud)
process.stdin.pipe(tr).pipe(process.stdout)
