'use strict'
function reduce (arr,fn, initial) {
	return arr.reduce((words,word) => {
		if (word in words){
			words[word]++
		}else{
			words[word] = 1
		}
		return words
	},initial)
}
module.exports = reduce
