'use strict'
const Hapi = require('hapi')
const through = require('through2')
async function start() {
	try {
		const server = Hapi.server({
			host: 'localhost',
			port: Number(process.argv[2] || 8080)
		})
		server.route({
			method:'POST',
			path: '/upload',
			config: {
				handler: function(request, h) {
					return new Promise((resolve,reject) => {
						let fileContent = ''
						request.payload.file.pipe(through((chunk,enc,callback) => {
							fileContent += chunk.toString()
							callback()
						})).on('finish',() => {
							return resolve(JSON.stringify({
								description: request.payload.description,
								file: {
									data: fileContent,
									filename: request.payload.file.hapi.filename,
									headers: request.payload.file.hapi.headers
								}	
							}))
						})
					})
				},
				payload: {
					output: 'stream',
					parse: true,
					allow: 'multipart/form-data'
				}
			}
		})
		await server.start()
    } catch (error) {
        throw error
    }
}
start()
mateo1017220384