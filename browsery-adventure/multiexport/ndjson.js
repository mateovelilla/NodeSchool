'use strict'
exports.parse = function(str){
    let result = Array();
    let stringSplitted = str.split('\n')
    for (let index = 0; index < stringSplitted.length; index++) {
        result.push(JSON.parse(stringSplitted[index]));
        
    }
    return result;
}
exports.stringify = function (row) {
    let result = row.map(JSON.stringify).join('\n')
    return result
}