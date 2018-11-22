'use strict'
const uniq = require('uniq');
/**
 * El modulo tiene un error
 * que no puede exportar arrw functions
 * por que o si no funciona
*/
module.exports = function (arrayInString) {
    let array = arrayInString.split(',')
    return uniq(array)
}