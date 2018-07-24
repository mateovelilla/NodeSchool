'use strict'

function repeat (operation,num){
	operation(num)
	if(num <= 0) return
	return repeat(operation, --num)
}
module.exports = repeat
