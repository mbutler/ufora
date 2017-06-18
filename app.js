let _ = require('lodash')
let fs = require('fs')
let getVillage = require('./village.js')

let village = getVillage(1)
let villageName = _.kebabCase(village.demographics.name)

fs.writeFile(villageName, JSON.stringify(village, null, 4), function (err) {
	if (err) return console.log(err)
	console.log(villageName + " has been generated")
})