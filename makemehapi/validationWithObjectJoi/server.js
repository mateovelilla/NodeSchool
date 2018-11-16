'use strict'
const Hapi = require('hapi')
const joi = require('joi')
async function start () {
    try {
     const server = Hapi.server({
			 host:'localhost',
			 port: Number(process.argv[2] || 8080)
		 })
		 server.route({
			 path:'/login',
       method:'POST',
       handler:function(request, h) {
        return 'login successful'
      },
			 config:{
				validate:{
					payload: joi.object({
					 isGuest: joi.boolean().required(),
					 username: joi.string().when('isGuest',{is:false,then: joi.required()}),
					 accessToken: joi.string().alphanum(),
					 password: joi.string().alphanum()
				 }).options({allowUnknown: true})
				 .without('password', 'accessToken')
				}
			 }
		 })
		 await server.start()
    } catch (error) {
        throw error
    }
}
start()