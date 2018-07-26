'use strict'
function duckCount () {
	let args = Array.from(arguments)
	return args.reduce(function (accumulator, currentDuck){
		if (Object.prototype.hasOwnProperty.call(currentDuck,'quack')) {
			accumulator++
		}		
		return accumulator
	},0)
}
module.exports = duckCount
