/*
*La idea de este ejercicio es hacer una peticion get a un url ingresada desde
* la terminal utilizando el modulo http con el metodo get, el cual recibe 2 parametros,
*el primer parametro es la url y el segundo es un callback que tiene como parametro
*de entrada la respuesta de la dirección a la cual le vamos a realizar la peticion get,
*la repuesta devuelve un objeto con varios atributos o "ESTADOS" de la respuesta.
*entre los mas importantes esta el estado "err" que son los errores de la respuesta,
*"data" que son los datos de respuesta del metodo get y  el estado "END".
*/
var http = require('http');
var url = process.argv[2];

http.get(url,(response) => {
	response.on('err',(e) => {
		console.log('error: '+ e.message);
	});
	
	response.on('data',(data) => {
		console.log(data.toString());
	});
});
