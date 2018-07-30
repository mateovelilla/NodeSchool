'use strict'
function repeat(operation, num){
	return () => {
		if (num <= 0) return
		operation()
		return repeat(operation, --num)
	}
}

function trampoline (func) {
	while (func && typeof func === 'function'){
		func = func()
	}
}
module.exports = function(operation, num){
	trampoline(function(){
		return repeat(operation,num)
	})
}
