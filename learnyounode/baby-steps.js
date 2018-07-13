'use strict'
var SumaValores = 0;
for (var i = 2; i < process.argv.length; i++) {
	SumaValores = SumaValores + Number(process.argv[i]);
};

console.log(SumaValores);
