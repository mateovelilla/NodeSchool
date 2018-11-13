'use strict'
const Hapi = require('hapi')
const server = Hapi.Server({
	host:'localhost',
	port: Number(process.argv[2] || 8080)
})
server.route({
	path:'/{name}',
	method:'get',
	handler: function (request, h){
		return `Hello ${request.params.name}`
	}
})
async function start(){
	await server.start()
}
start()
