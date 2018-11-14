'use strict'
const Hapi = require('hapi');
const H2o2 = require('h2o2');
const server = Hapi.server({
    host:'localhost',
    port: Number(process.argv[2] || 8080)
})
async function start(){
    try {
      await server.register({plugin:H2o2})
      server.route({
        method: 'GET',
        path: '/proxy',
        handler:{
          proxy:{
            host:'localhost',
            port:65535
          }
        }
      })
      await server.start()
    } catch (error) {
        throw error
    }
}
start()