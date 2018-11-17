'use strict'
const Hapi = require('hapi')
const hapi_webAuthentication_basic = require('hapi-auth-basic') 
async function validate(request,username,password,h) {
	if(username == 'hapi' &&  password == 'auth'){
		return {isValid:true, credentials:{name:username}}
	}
	return {isValid:false}
}
async function start(){ 
	try {
		const server = Hapi.server({
			host: 'localhost',
			port: Number(process.argv[2] || 8080)
		})
		await server.register(hapi_webAuthentication_basic)
		server.auth.strategy('simple','basic',{validate})
		server.auth.default('simple');
		server.route({
			method: 'GET',
			path: '/',
			handler: function (request, h) {
				return 'welcome';
			}
		});
		await server.start()
	} catch (error) {
		throw EvalError
	}
}
start()