'use strict'
const five = require('johnny-five')
const board = new five.Board()
board.on('ready',() => {
    let potentiometer = new five.Sensor({
        pin: "A2",
        freq: 250
    });
    let servo = new five.Servo(9)
    potentiometer.on('change',() => {
        servo.to(potentiometer.scaleTo(0, 180));
    })
})