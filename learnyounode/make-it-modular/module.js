/*Este modulo contiene la misma funcionalidad que el ejercicio anterior
*Pero con una diferencia, como es un modulo debe de retornar solo un valor
*con los archivo filtrados, para que asi el metodo principal solo imprima e
*ingrese la ruta y la extension.
*/
let fs = require('fs')
let path = require('path')
let fileFiltered = [];
module.exports = ( route ,extension , callback) => {
	extension = '.'+extension
	fs.readdir(route,function ( err ,data){
		if(err)
			return callback(err)
		data.forEach((file) => {
			if(path.extname(file) == extension) {
				fileFiltered.push(file)
			}
		})
		return callback(null,fileFiltered)
	})
}

