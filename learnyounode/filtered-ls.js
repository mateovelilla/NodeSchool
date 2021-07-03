'use strict'

const fs = require('fs');
const path = require('path');
const route = process.argv[2];
const extension = `.${process.argv[3]}`;
fs.readdir(route,function (err,data) {
	if(err)
		throw err;
	data.forEach((file) => {
		if(path.extname(file) === extension) {
			console.log(file);
		}
	});
});
