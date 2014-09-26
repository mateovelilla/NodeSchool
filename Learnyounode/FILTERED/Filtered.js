/*
LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
  FILTRADO LS 
*El proposito de este ejercicio es abrir un folder y leer los archivo que se encuentran en el
*capturando la extensión de cada archivo e imprimiendo solo los archivo que tienen extension ingresada por consola
*no dan como referencia 2 libreria de node que son fs(File system) y path que contiene utilidades
*para la manipulación de rutas de archivos y la documentación de la libreria esta acá http://nodejs.org/api/path.html
* El metodo que mas nos interesa es path.extname() que nos retornara un la extensión del archivo.
*Debemos de tener encuenta que tendremos 2 parametros el primero es la ruta y el segundo la extesion del archivo por
*debemos filtrar. Ademas de eso utilizaremos la funcion en formato de callback fs.readdir(); para leer el archivo
*que como primer parametro recibe la ruta del folder
*/
var fs = require('fs'),
path = require('path');
var ruta = process.argv[2];
var Extesion = '.'+process.argv[3];/* Se tiene que incluir el punto por que la función de path lo devuelve con el punto*/
fs.readdir(ruta,function (err,data){
	if(err){
		throw err;
	}
	data.forEach(function(Archivo){
		if( path.extname(Archivo) == Extesion){
			console.log(Archivo);
		}
	});
});
