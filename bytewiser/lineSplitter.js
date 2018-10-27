'use strict'
const fs = require('fs')
let pathFile = process.argv[2]
let chunk = fs.readFileSync(pathFile)
function recursiveSlice (chunk) {
	let index = chunk.indexOf('\n')
	if (index !== -1 ){
		let newChunk = chunk.slice(0,index)
		chunk = chunk.slice(index + 1)
		console.log(newChunk)
		recursiveSlice.call(this, chunk)
	}
	if (index === -1 && chunk.length > 0 ){
		console.log(chunk)
	}
}
recursiveSlice(chunk)
