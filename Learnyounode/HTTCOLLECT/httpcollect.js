/*Este ejercicio es similar al ejercicio de http client la diferencia es que
* hay que utilizar un modulo instalado atravez del gestor de paquetes npm (Node package manager)
* el modulo de llama bl (buffer list) el cual sirve para hacer la conversion del buffer a un formato
* mucho mas legible.
*/
var http = require('http');
var bl = require('bl');
var Url = process.argv[2];
http.get(Url,function(respuesta){
	respuesta.pipe(bl(function (err,data){
		console.log(data.length);
		console.log(data.toString());
		if(err)
			console.log("Hola Mundo");
			throw err;
	}));
});

/*
Solucion:
  var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))  
    })

*/
