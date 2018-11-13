'use strict'
const fs = require('fs')
let peach = function (obj) {
	console.trace('traced')
	console.log(obj)
}
let bowser = function (callback) {
	fs.readFile(process.argv[2],{encoding:"utf8"},callback)
	
}
let koopa = function (error, file) {
	if (error) return console.error(error.message)
	
	peach(JSON.parse(file))
}
bowser(koopa)
