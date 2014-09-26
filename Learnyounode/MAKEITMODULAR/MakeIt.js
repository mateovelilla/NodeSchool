/*
LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
Hazlo modular
*Este ejercicio trata de volver el anterior ejercicio, pero con una estructura modular,
*se utilizan las misas libreria pero la forma de retornar los datos es diferente.
*/
var miModulo = require('./Module');/*El .js no es necesario*/
var ruta = process.argv[2];
var extesion = process.argv[3];

miModulo(ruta,extesion, function (err , data){
	if(err){
		console.log(err);
	}else{
		data.forEach(function(file){
			console.log(file);
		});
	}
});
