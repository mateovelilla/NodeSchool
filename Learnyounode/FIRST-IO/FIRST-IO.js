/*
*MI PRIMER I / O!
*El proposito del ejercicio es utilizar la libreria para manejar archivos,
*este archivo estara dispuesto, para que el usuario digite la URL por consola,
*asi que utilizaremos process.argv[] para capturar
*la url y manipular el archivo. despues de esto se debe caulcular el numero
*saltos de linea del archivo.
*/

var Url = process.argv[2];
var fs = require('fs');
var buf = fs.readFileSync(Url);
buf = buf.toString();
console.log(
	((buf.split('\n')).length) - 1
);