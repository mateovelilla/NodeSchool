const fs = require('fs');
const path = require('path');
const fileFiltered = [];
module.exports = (route, extension, callback) => {
  const transformExtension = `.${extension}`;
	fs.readdir(route, function ( err ,data){
		if(err)
			return callback(err)
		data.forEach((file) => {
			if(path.extname(file) == transformExtension) {
				fileFiltered.push(file)
			}
		})
		return callback(null,fileFiltered)
	})
}

