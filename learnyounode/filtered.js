'use strict'

let fs = require('fs'),
path = require('path');
let route = process.argv[2];
let extension = '.'+process.argv[3];
/* Se tiene que incluir el punto por que la función de path lo devuelve la extension incluyento el "." */
fs.readdir(route,function (err,data){
	if(err)
		throw err;
	
	data.forEach((file) => {
		if( path.extname(file) === extension) {
			console.log(file);
		}
	});
});
