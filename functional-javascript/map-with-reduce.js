'use strict'
module.exports = function (arr,fn){
	return arr.reduce(function(accumulator,currentValue,currentIndex){
		accumulator.push(fn(currentValue))
		return accumulator
	},[])
}
