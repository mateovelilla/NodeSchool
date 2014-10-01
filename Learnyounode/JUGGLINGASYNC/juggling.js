/*
MALABARES ASINCRONOS
______________________________________________


*/


var http = require('http');
var bl = require('bl');
var URLS = [];
URLS[1] = process.argv[2];
URLS[2] = process.argv[3];
URLS[3] = process.argv[4];
for (var i = 1; i < URLS.length; i++) {
	http.get(URLS[i],function(respuesta){
		respuesta.pipe(bl(function (err,data){
			if(data){
				console.log(data.toString());
			}
		}));
	});
};
