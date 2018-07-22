'use strict'
const picture = require('cat-picture')
const image = require('lightning-image-poly')
const remote = require('electron').remote
const fs = require('fs')
let src = picture.src
picture.remove()
function save (){
	remote.getCurrentWebContents().printToPDF({
		portrait: true
	}, function(err,data){
		fs.writeFile('annotation.pdf',data,function(err){
			if(err) alert('error generating pdf!' + err.message)
			else alert('pdf saved!')
		})
	})
}
window.addEventListener('keydown', function(e){
	if(e.keyCode == 80) save()
})
let viz = new image('#visualization',null,[src],{hullAlgorithm: 'convex'})
