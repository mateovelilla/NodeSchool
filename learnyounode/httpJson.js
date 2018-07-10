'use strict'

let http = require('http'),
	url = require('url')

function parsetime (time) {
      let objectDate = {
	      'hour': time.getHours(),
	      'minute': time.getMinutes(),
	      'second': time.getSeconds()
      }
      return objectDate
}    

function unixtime (time) {
     let unixTimeObject = {
	     'unixtime': time.getTime()
     }
     return unixTimeObject
}

let server = http.createServer((req, res) => {
	let parsedUrl = url.parse(req.url, true)
	let time = new Date(parsedUrl.query.iso)
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
    })
server.listen(Number(process.argv[2]))

