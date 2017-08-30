/* MI PRIMER ASYNC I/O
*Este ejercicio es parecido al anterior, pero hay que utilizar una función diferente 
*que es readFile, y como dice la descripcion del ejecicio, hay que realizarlo a la manera
* de node.js (Asincrono), utilizando la función lectora de archivo en formato de callback. 
*/

let url = process.argv[2];
let fs = require('fs');
fs.readFile(url,'utf8',(err, data) => {
	if (err)
		throw err; 
	let buffer = data.toString();
	let number =  (buffer.split('\n')).length - 1;
	console.log(number);

});
