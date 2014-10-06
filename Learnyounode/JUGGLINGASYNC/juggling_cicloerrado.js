/*
MALABARES ASINCRONOS
______________________________________________
El metodo de slice sirve para seleccionar algunos elementos dentro de un array,
cuando solo tiene un parametro de entrada no delimita hasta donde tiene que recorrer
el array.
*/
var http = require('http');
var bl = require('bl');
var urls = process.argv.slice(2);
//console.log(urls);

function Obtener(Urls){
	Urls.forEach(function(Url){
		http.get(Url,function (respuesta){
			data = "";
			respuesta.on('err',function(){
				console.log('Error agravicimo :D');
			});
			respuesta.on('data',function(fila){
				data = data + fila.toString();
			});
			respuesta.on('end',function(){
				console.log(data);
				Obtener(urls.slice(1))
			});
		});
	});	
}

Obtener(urls);
