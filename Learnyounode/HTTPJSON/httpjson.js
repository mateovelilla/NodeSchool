 var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
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







/*var http = require('http'),
moment = require('moment'),
map = require('through2-map'),
url = require('url'),
fs = require('fs');
var server = http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	var urlParts = url.parse(req.url, true);
	var thisMoment = new moment(urlParts.query.iso);
	if ('/api/parsetime' === urlParts.pathname) {
	res.write(JSON.stringify({
		'hour': null,
		'minute': null,
		'second': null
	}));
	res.end();
	}
	else if ('/api/unixtime' === urlParts.pathname) {
		res.write(JSON.stringify({
			'unixtime': null
			}));
		res.end();
	}else{
		res.end();
	}
	}).listen(process.argv[2]);

Hora de verificacion 00:56 y arrojo un fallo le tuve que cambiar los valores a nulos
solucion oficial
___________________________________________________________________________________

  var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
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

────────────────────────────────────────────────────────────────────────────────

You've finished all the challenges! Hooray!

*/