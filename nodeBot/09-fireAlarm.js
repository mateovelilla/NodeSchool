'use strict'
const five = require('johnny-five')
const board = new five.Board()
board.on('ready',() => {
    let temperature = new five.Thermometer(
        {
            controller: 'TMP36',
            pin: 'A0'
        }
    )
    let piezo = new five.Piezo(9)
    let led = new five.Led(13)
    let button = new five.Button
    temperature.on('data', function () {
        if(this.celsius > 50) {
            led.strobe(1000);
            piezo.play({
                song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
                beats: 1 / 4,
                tempo: 100
            });
             
        } else{
            piezo.off()
            led.stop().off();
        }
    })
    button.on('press',() => {
        piezo.off();
        led.stop().off();
    })
})