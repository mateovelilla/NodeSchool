'use strict'
function loadUsers (userIds, load, done){
	let users = []
	let sizeArray = 0
	userIds.forEach(function (value,index){
		sizeArray++
		load(value, function(user){
			users[index] = user
			if (sizeArray === userIds.length) return done(users)
		})
	})
}
module.exports = loadUsers
