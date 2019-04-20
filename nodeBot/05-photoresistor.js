'use strict';
const five = require('johnny-five');
const board = new five.Board();

board.on('ready', function () {
    let led = new five.Led(9);
    let photoresistor = new five.Sensor({
        pin: "A0",
        freq: 250
    });
    board.repl.inject({
        pot: photoresistor
    });
    photoresistor.on('change',function ()  {
        if(this.value > 600) {
            led.on()
        }else {
            led.off()
        }
    })
})
