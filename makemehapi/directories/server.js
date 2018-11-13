'use strict'
const Hapi = require('hapi')
const inert = require('inert')
const path = require('path')
async function start(){
    try {
        const server = Hapi.server({
            host: 'localhost',
            port: Number(process.argv[2] || 8080)
        })
        await server.register(inert)
        server.route({
            method: 'GET',
            path: '/foo/bar/baz/{param}',
            handler: {
                directory:{
                    path: path.join(__dirname,'public')
                }
            }
        })
        await server.start()    
    } catch (error) {
        throw error
    }
}
start()