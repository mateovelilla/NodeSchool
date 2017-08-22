/*
*MI PRIMER I / O!
*El proposito del ejercicio es utilizar la libreria para manejar archivos,
*este archivo estara dispuesto, para que el usuario digite la URL por consola,
*asi que utilizaremos process.argv[] para capturar
*la url y manipular el archivo. despues de esto se debe caulcular el numero
*saltos de linea del archivo.
*/

let url = process.argv[2]
let fs = require('fs')
let buffer = fs.readFileSync(url);
let content = buffer.toString();
console.log(((content.split('\n')).length) - 1)
