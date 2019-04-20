'use strict';
const five = require('johnny-five');
const board = new five.Board();
board.on('ready', () => {
    const servo = new five.Servo({
        pin: 9,
        center:true
    });
    board.repl.inject({
        servo: servo
    })
    servo.sweep()
    board.wait(3000,() => {
        servo.stop();
        servo.center();
    })

})