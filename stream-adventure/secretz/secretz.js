'use strict'
const zlib = require('zlib')
const crypto = require('crypto')
const cipher = process.argv[2]
const passphrase = process.argv[3]
const concat = require('concat-stream')
const tar = require('tar')
let parser = new tar.Parse()
parser.on('entry',function(e){
	if (e.type !== 'File') return e.resume()

	let h =crypto.createHash('md5',{encoding:'hex'})
	e.pipe(h).pipe(concat(function(hash){
		console.log(hash + ' ' + e.path);
	}))
})
process.stdin.pipe(crypto.createDecipher(cipher,passphrase))
.pipe(zlib.createGunzip())
.pipe(parser)
