'use strict';
const five = require('johnny-five');
const board = new five.Board();

board.on('ready', function () {
    let button = new five.Button(5);
    let led = new five.Led(9);
    button.on('press',() => {
        led.toggle();
    })

})