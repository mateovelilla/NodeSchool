'use strict';
var foot = {
	kick: function () {
		this.yelp = "Ouch!";
		let that = this; 
		setImmediate(function () {
			console.log(that.yelp);
		})
	}
};
foot.kick()
