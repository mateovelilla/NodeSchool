'use strict'
const crypto = require('crypto')
const through2 = require('through2')
let passphrase = process.argv[2]
process.stdin.pipe(through2(function(buffer,_,next){
	//console.log(passphrase)
	//console.log(buffer.toString())
	let stream = crypto.createDecipheriv('aes256',passphrase,crypto.randomBytes(12))
	stream.pipe(process.stdout)
	stream.write(buffer)
	stream.end()
	//stream.pipe(process.stdout)
}))
