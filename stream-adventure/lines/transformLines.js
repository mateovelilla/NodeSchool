'use strict';
const through = require ('through2')
const split = require('split')
let count = 0
let stream = through(function(line,_, next) {
	let text = line.toString()
	if(count % 2 == 0){ 
       		text = text.toLowerCase()
	}else{
		text = text.toUpperCase()
	}
	this.push(text + '\n')
	count++
	next()
})
process.stdin.pipe(split('\n')).pipe(stream).pipe(process.stdout)
