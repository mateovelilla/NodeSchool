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
