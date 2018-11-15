'use strict'
const Hapi = require('hapi')
const rot13 = require('rot13-transform')
const fs = require('fs')
const path = require('path')
const server = Hapi.server({
  host:'localhost',
  port: Number(process.argv[2] || 8080) 
})
async function start() {
	try {
		server.route({
			path:'/',
			method: 'GET',
			handler: (request,h) => {
				return fs.createReadStream(path.join(__dirname,'file2Encrypt.txt'))
					.pipe(rot13())
			}
    })
		await server.start()
    } catch (error) {
        throw error
    }
}
start()