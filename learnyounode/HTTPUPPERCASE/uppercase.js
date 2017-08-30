var http = require('http'),
	puerto = process.argv[2],
	map = require('through2-map');

var servidor = http.createServer(function (req , res){
	if(req.method == 'POST'){
		req.pipe(map(function (Pedasito){
			return Pedasito.toString().toUpperCase();
		})).pipe(res);
	}else{
		req.end();
	}
}).listen(puerto);


/*
Solucion oficial
────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    var map = require('through2-map')
    
    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))


*/