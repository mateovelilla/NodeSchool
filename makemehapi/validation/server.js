'use strict'
const Hapi = require('hapi')
const Joi = require('joi')
const server = Hapi.server({
    host: 'localhost',
    port: Number(process.argv[2 || 8080])
})
async function start() {
  try {
    server.route({
      path: '/chickens/{breed?}',
      method:'GET',
      handler:(request,h) => {
          return true
      },
      options:{
        validate:{
          params: {
            breed: Joi.string().required()
          }
        }
      }
    })
    server.start()
  } catch (error) {
    throw error  
  }
}
start()