'use strict'
const Hapi = require('hapi')
const Vision = require('vision')
const Handlebars = require('handlebars')
const path = require('path')
async function start () {
  try {
    const server = Hapi.server({
      host: 'localhost',
      port: Number(process.argv[2] || 8080)
    })
    await  server.register(Vision)
    server.views({
      engines:{
        html: Handlebars
      },
      helpersPath: path.join(__dirname,'helpers'),
      path: path.join(__dirname, 'views')
    })
    server.route({
      path: '/',
      method: 'GET',
      handler: {
        view:'index.html'
      }
    })
    await server.start()
  } catch (error) {
    throw error
  }
}
start()