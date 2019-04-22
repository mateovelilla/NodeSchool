'use strict';
const five = require('johnny-five');
const board = new five.Board();
const udp = require('dgram');
const server = udp.createSocket('udp4')
board.on('ready', function () {
    let piezo = new five.Piezo(8);
    server.on('message',() => {
        piezo.play({
            song: [
              ["C4", 1 / 4],
              ["D4", 1 / 4],
              ["F4", 1 / 4],
              ["D4", 1 / 4],
              ["A4", 1 / 4],
              [null, 1 / 4],
              ["A4", 1],
              ["G4", 1],
              [null, 1 / 2],
              ["C4", 1 / 4],
              ["D4", 1 / 4],
              ["F4", 1 / 4],
              ["D4", 1 / 4],
              ["G4", 1 / 4],
              [null, 1 / 4],
              ["G4", 1],
              ["F4", 1],
              [null, 1 / 2]
            ],
            tempo: 100
          });
    })
    server.bind(1337)
})
