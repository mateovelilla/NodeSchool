'use strict'
function checkUsersValid (goodUsers){
	return function allUsersValid (submitedUsers){
		return submitedUsers.every(u => goodUsers.some(g => u.id === g.id))
	}
}
module.exports = checkUsersValid
