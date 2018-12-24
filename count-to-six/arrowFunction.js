'use strict';
var inputs = process.argv.slice(2);
var result = inputs.map(element => {
	return element[0]
}).reduce((accumulator,currentValue)=>{
	return accumulator + currentValue;
});
console.log(`[${inputs}] becomes "${result}"`);

