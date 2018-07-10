/*
*se debe crear un progama para imprimir la fecha
*cada que un cliente tcp se conecte al servidor
*/

const net = require('net')
let port = process.argv[2]

function filter (dato) {
	return (dato<10? '0'+dato : dato)
}

let servidor = new net.Server( (socket) => {
	let date = new Date()
	let year = date.getFullYear()
	let month = date.getMonth()
	let day = date.getDate()
	let hours = date.getHours()
	let minute = date.getMinutes()
	// let fecha = ano+'-'+Filtro(mes+1)+'-'+Filtro(dia)+' '+Filtro(hora)+':'+Filtro(minutos)+'\n';
	let newDate = `${year}-${filter(month+1)}-${filter(day)} ${filter(hours)}:${filter(minute)}\n`
	socket.on('end',() => {
		console.log('Se desconecto')
	})
	
	socket.write(newDate)
	socket.end()
})

servidor.listen(port)
