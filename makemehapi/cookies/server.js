'use strict'
const Hapi = require('hapi')
const Boom = require('boom')
async function start () {
	try {
		const server = Hapi.server({
			host: 'localhost',
			port: Number(process.argv[2] || 8080)
		})
		server.state('session',{
			path:'/',
			encoding: 'base64json',
			ttl: 10,
			domain: 'localhost',
			isSameSite:false,
			isSecure: false,
			isHttpOnly: false
		})
		server.route({
			path:'/set-cookie',
			method:'GET',
			handler: function(request, h) {
				return h.response({
					massage: 'success'
				}).state('session',{key: 'makemehapi'})
			},
			config: {
				state: {
					parse: true,
					failAction: 'log'
				}
			}
		})
		server.route({
			path:'/check-cookie',
			method: 'GET',
			handler: function(request, h){
				const session = request.state.session
				if (!session) return Boom.unauthorized('Missing authentication')
				return {'user':'hapi'}
			}
		})
		await server.start()
	} catch (error) {
		throw error
	}
}
start()