/*
*se debe crear un progama para imprimir la fecha
*cada que utilicen el servidor
*/

var net = require('net');
var puerto = process.argv[2];
function Filtro(dato){
	return (dato<10? '0'+dato : dato)
}
var servidor = net.createServer(function (socket){
	var fecha = new Date();
	var ano = fecha.getFullYear();
	var mes = fecha.getMonth();
	var dia = fecha.getDate();
	var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var fecha = ano+'-'+Filtro(mes+1)+'-'+Filtro(dia)+' '+Filtro(hora)+':'+Filtro(minutos)+'\n';
	socket.on('end',function(){
		console.log('Se desconecto');
	});
	socket.write(fecha);
	socket.end();
});
servidor.listen(puerto);

/*
Solucion oficial
    var net = require('net')
    
    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))



*/