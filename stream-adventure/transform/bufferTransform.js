'use strict';

let through = require('through2')
let stream = through(function(buffer, enconding, next){
	let text = buffer.toString().toUpperCase()
	this.push(text)
	next()
})
process.stdin.pipe(stream).pipe(process.stdout)

