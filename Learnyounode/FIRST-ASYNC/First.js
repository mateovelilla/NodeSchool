/* MI PRIMER ASYNC I/O
*Este ejercicio es parecido al anterior, pero hay que utilizar una función diferente 
*que es readFile, y como dice la descripcion del ejecicio, hay que realizarlo a la manera
* de node.js (Asincrono), utilizando la función lectora de archivo en formato de callback. 
*/

var Url = process.argv[2];
var fs = require('fs');
fs.readFile(Url,'utf8',function (err, data) {
  	if (err){
  		throw err;
	} 
	var buf = data.toString();
	var num =  (buf.split('\n')).length - 1;
	console.log(num);

});