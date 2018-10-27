'use strict'
const through = require('through2')
process.stdin.setEncoding('utf8');

process.stdin.pipe(through(function(chunk, enc, callback) {
	let newChunk = chunk.map(x => x === 46?33 : x )
	console.log(newChunk)
}))
