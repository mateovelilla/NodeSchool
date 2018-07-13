'use strict'

let url = process.argv[2];
let fs = require('fs');
fs.readFile(url,'utf8',(err, data) => {
	if (err)
		throw err; 
	let buffer = data.toString();
	let number =  (buffer.split('\n')).length - 1;
	console.log(number);

});
