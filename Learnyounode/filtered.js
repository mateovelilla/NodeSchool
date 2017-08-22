/*
LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
  FILTRADO LS 
*El proposito de este ejercicio es abrir un folder y leer los archivo que se encuentran en el
*capturando la extensión de cada archivo e imprimiendo solo los archivo que tienen extension ingresada por consola
*nos dan como referencia 2 librerias de node que son fs(File system) y path que contiene utilidades
*para la manipulación de rutas de archivos.
* El metodo que mas nos interesa es path.extname() que nos retornara la extensión del archivo en la ruta indicda.
*Debemos de tener encuenta que tendremos 2 parametros de entrada, el primero es la ruta y el segundo la extesion del archivo por debemos filtrar. Ademas de eso utilizaremos la funcion en formato de callback fs.readdir(); para leer el contenido del directorio, que como primer parametro recibe la ruta del folder*/

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
