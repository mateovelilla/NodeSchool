'use strict'
const spawn = require('child_process').spawn
const duplexer2 = require('duplexer2')
module.exports = function(cmd,args) {
	let result = spawn(cmd,args)
	let duplex = duplexer2(result.stdin,result.stdout)
	return duplex
}
