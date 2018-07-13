'use strict';
const http = require('http')
const fs = require('fs')
const through = require('through2')
/* let server = http.createServer( (req,res) => {
	if(req.method === 'POST') {
		// req.pipe(fs.createWriteStream('post.txt'))
		console.log('entro aca')
	}
	console.log('Entro alguna mierda')
	res.end('beep boop\n')
})
server.listen(parseInt(process.env[2]))
*/
let port = parseInt(process.argv[2],)
let allBuffer = ''
let server = http.createServer( (req, res) => {
	if(req.method === 'POST'){
		req.pipe(through(function(buffer,_,next){
			let text = buffer.toString().toUpperCase()
			allBuffer += text
			//res.end(text)
			next()
		},function(done){
			res.end(allBuffer)
			done()
		}))
	}
})
server.listen(port)
