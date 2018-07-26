'use strict'
function countWords (inputWords){
	return inputWords.reduce(function (fruits, fruit){
		if(fruit in fruits){
			fruits[fruit]++
		} else {
			fruits[fruit] = 1
		}
		return fruits
	},{})
}
module.exports = countWords
