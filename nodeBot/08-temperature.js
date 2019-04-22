'use strict'
const five = require('johnny-five')
const dnode = require('dnode')
const board = new five.Board()
board.on('ready',() => {
    let temperature = new five.Thermometer(
        {
            controller: 'TMP36',
            pin: 'A0'
        }
    )
    let temp = null
    temperature.on('data', function () {
        temp = this.celsius
    })
    let server = dnode({
        getTemperature: (cb) => {
            cb(temp)
        }
    })
    server.listen(1337)
})