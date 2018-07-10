let http = require('http'),
	fs = require('fs'),
	port = process.argv[2],
	file = process.argv[3],
	fileRead = null

let server = http.createServer((req , res) => {
	fileRead = fs.createReadStream(file)
	fileRead.pipe(res);
})
.listen(port)
