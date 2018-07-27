'use strict'
var slice = Array.prototype.slice
module.exports = function (namespace){
	return console.log.bind(console, namespace)
}

