'use strict'
const Hapi = require('hapi')
const inert = require('inert')
const path = require('path')
const server = Hapi.server({
	host:'localhost',
	port: Number(process.argv[2] || 8080)
})
async function start() {
	try{
		await server.register(inert)
		server.route({
			method: 'GET',
			path: '/',
			handler: {
				file: path.join(__dirname, 'index.html')
			}
		})
		await server.start()
	}catch(e){
		throw e
	}

}
start()

