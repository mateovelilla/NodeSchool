/*Este modulo contiene la misma funcionalidad que el ejercicio anterior
*Pero con una diferencia, como es un modulo debe de retornar solo un valor
*con los archivo filtrados, para que asi el metodo principal solo los imprima e
*ingrese la ruta y la extension.
*/
var fs = require('fs');
var path = require('path');
var ArchivosFiltrados = [];
module.exports =  function( ruta ,extesion , callback){
		extesion = '.'+extesion;
		fs.readdir(ruta,function ( err ,data){
			if(err){
				callback(err);
			}else{
				data.forEach(function(Archivo){
					if(path.extname(Archivo) == extesion){
						ArchivosFiltrados.push(Archivo);
					}
				});
				callback(null,ArchivosFiltrados);
			}
		});
	};

/*
Otra Forma de realizarlo:
fs.readdir(Directorio,function(err,data){
	if(err){
		return callback(err);
	}else{
		data = data.filter(function (file) {
      		return path.extname(file) === '.' + Extension
    	})

    	callback(null, data)

		}	
	}

);

*/