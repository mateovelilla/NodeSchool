var five = require('johnny-five');
var board = new five.Board();

board.on('ready',function(){
	console.log('Board lista');
	led = new five.Led();
	led.fade(900);
});


