'use strict'

const path = process.argv[2];
const fs = require('fs');
fs.readFile(path,'utf8',(err, data) => {
	if (err)
		throw err; 
	const buffer = data.toString();
	let number =  (buffer.split('\n')).length - 1;
	console.log(number);
});
