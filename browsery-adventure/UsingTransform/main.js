'use strict'
const fs = require('fs');
const txt = fs.readFileSync('/home/r3v3r5ing/.nvm/versions/node/v11.0.0/lib/node_modules/browserify-adventure/problems/using_transforms/wake.txt', 'utf8');
const sprintf = require('sprintf');
const lines = txt.split('\n');
lines.forEach(function (line, index) {
    if (index % 5 === 0) {
        console.log(sprintf('%3d %s', index, line));
    }
    else {
        console.log('    ' + line);
    }
});