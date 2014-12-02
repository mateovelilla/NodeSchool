var archivo = process.argv[2];
var fs = require('fs');
fs.createReadStream(archivo)
	.pipe(process.stdout);
