let dice = require('./dice.js')
let kin = require('./kin.js')
let namer = require('./namer.js')
let _ = require('lodash')

function getVillage (numOfkin) {
	let village = []
	let population = 0

	let villageName = namer.getTownName()

	let numberOfKin = numOfkin || _.random(5, 30)

	for (var i = 0; i < numberOfKin; i++) {
	  let newFam = kin()
	  village.push(newFam)
	}

	_.forEach(village, function(kin) {
		_.forEach(kin, function(member) {
			population++
		})
	})

	village.push({ "VillageName": villageName, "population": population })
	village.demographics = { "name": villageName, "population": population }

	return village
}

module.exports = getVillage
