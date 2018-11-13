'use strict'
const Hapi = require('hapi')
const server = Hapi.server({
	host:'localhost',
	port:Number(process.argv[2] || 8080)
})
server.route({
	path:'/',
	method: 'GET',
	handler: function (request, h) {
		return 'Hello hapi'
	}
})
async function start () {
	await server.start();
}
start()
