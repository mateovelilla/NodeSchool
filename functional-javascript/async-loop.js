'use strict'
function loadUsers (userIds, load, done){
	let users = []
	for (let i = 0; i < userIds.length; i++) {
		let loadUser = load(UserIds[i])
		user.push(loadUser)
	}
	done(users)
	//return users
}
module.exports = loadUsers
