'use strict'
const Hapi = require('hapi')
const Vision = require('vision')
const path = require('path')
const handlebars = require('handlebars')
async function start(){
    try {
        const server = Hapi.server({
            host:'localhost',
            port: Number(process.argv[2] || 8080)
        })
        await server.register(Vision)
        server.views({
            engines:{
                html: handlebars
            },
            path:path.join(__dirname,'templates')
        })
        server.route({
            method:'GET',
            path:'/',
            handler:{
                view: 'index.html'
            }
        })
        await server.start()
    } catch (error) {
        throw error
    }
}
start()