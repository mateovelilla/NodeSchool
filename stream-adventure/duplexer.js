'use strict'
const spawn = require('child_process').spawn
module.exports = function(cmd,args) {
	console.log(cmd)
	let result = spawn(cmd,args)
	result.stdout.on('data',(data) => {
		process.stdout(data)
	})
}
