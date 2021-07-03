'use strict'

const http = require('http');

function parsetime (time) {
	return {
		'hour': time.getHours(),
		'minute': time.getMinutes(),
		'second': time.getSeconds()
	}
}    

const unixtime = (time)=> {
	return {
		'unixtime': time.getTime()
	}
}

http.createServer((req, res) => {
	let parsedUrl = new URL(req.url, 'http://fake.com')
	let time = new Date(parsedUrl.searchParams.get('iso'))
	let result
	if (/^\/api\/parsetime/.test(req.url))
		result = parsetime(time)
	else if (/^\/api\/unixtime/.test(req.url))
		result = unixtime(time)
	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify(result))
	} else {
		res.writeHead(404)
		res.end()
	}
}).listen(parseInt(process.argv[2]))

