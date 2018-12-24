'use strict';
module.exports = function average(...args) {
	let suma = args.reduce((accum,value)=> accum + value, 0)
	return suma / args.length   
};
