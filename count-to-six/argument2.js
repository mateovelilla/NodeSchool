'use strict'
module.exports = function makeImportant (char,length = char.length){
    return char + '!'.repeat(length)
}