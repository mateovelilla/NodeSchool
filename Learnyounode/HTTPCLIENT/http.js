/*
*La idea de este ejercicio es hacer una peticion get a un url ingresada desde
* la terminal utilizando el modulo http con el metodo get, el cual recibe 2 parametros,
*el primer parametro es la url y el segundo es una funcion anonima que tiene como parametro
*de entrada la respuesta de la dirección a la cual le vamos a realizar una peticion get,
*la repuesta devuelve un objeto con varios atributos o "ESTADOS" de la respuesta.
*entre los mas importantes esta el estado "Err" que son los errores de la respuesta,
*el data que son los datos de respuesta del metodo get y  el estado "END".
*Se me olvidaba comentar que en cada ejercicio nos proveen de documentación que localmente
*se encuentra guardada al momento de instalar node.js
*/
var http = require('http');
var Url = process.argv[2];

http.get(Url,function(respuesta){
	respuesta.on('err',function(e){
		console.log('El error es: '+ e.message);
	});
	respuesta.on('data',function(data){
		console.log(data.toString());/*Se pasa a string por que la respuesta se devuelve en string*/
	});
});
/*
*Otra respuesta es:

var http = require('http')
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    })

*el setEncoding es para convertir el formato de la respuesta y asi imprimirla con los
*caracteres especiales.
*/