'use strict';

const concat = require('concat-stream')
let concatStream = concat(function(buffer){
	let bufferToString = buffer.toString().split("").reverse().join("")
	process.stdout.write(bufferToString)
})
process.stdin.pipe(concatStream)
