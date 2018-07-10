/*Este ejercicio es similar al ejercicio de http client la diferencia es que
* hay que utilizar un modulo instalado atravez del gestor de paquetes npm
* el modulo de llama bl (buffer list) el cual sirve para hacer la conversion del buffer a un formato
* mucho mas legible.
*/
let http = require('http')
let bl = require('bl')
let url = process.argv[2]
http.get(url,(response) => {
	response.pipe(bl((err,data) => {
		console.log(data.length)
		console.log(data.toString())
		if (err) {
			throw err;
		}
	}))
})

