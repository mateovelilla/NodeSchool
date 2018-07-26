'use strict'
let slice = Array.prototype.slice
function add (title,message){
	console.log(title, message)
}
function logger (namespace) {
	return add(namespace)
}
module.exports = logger
