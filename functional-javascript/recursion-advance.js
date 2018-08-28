'use strict'
function getDependencies (tree,arrayDependencies) {
	arrayDependencies = arrayDependencies ||  []
	if (tree && Object.keys(tree).includes('dependencies')){
		Object.keys(tree.dependencies).forEach(function(value,index){
			let dependencie = `${value}@${tree.dependencies[value].version}`
			if (!arrayDependencies.includes(dependencie)) arrayDependencies.push(dependencie)
			arrayDependencies = getDependencies(tree.dependencies[value],arrayDependencies).sort()
		})
	}
	return arrayDependencies
}
module.exports = getDependencies
