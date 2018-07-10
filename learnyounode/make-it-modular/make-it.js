/*
LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────
Hazlo modular
*Este ejercicio trata de volver el anterior ejercicio, pero con una estructura modular,
*se utilizan las mismas librerias pero la forma de retornar los datos es diferente.
*/
const path = require('path')
let myModule = require(path.resolve(__dirname, 'module'));/*El .js no es necesario*/
let route = process.argv[2];
let extension = process.argv[3];

myModule(route,extension, (err , data) => {
	if(err)
		throw new Error(err)
	data.forEach((file) => {
		console.log(file)
	})
})
