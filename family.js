let _ = require('lodash')
let character = require('./character.js')

function getFamily (name) {
	let family = []

	if (name === undefined) {
		var father = character("male", undefined)
	} else {
		var father = character("male", name)
	}

	let surname = father.fullname.last
	let mother = character("female", surname)

	mother.numberOfKids = _.round(_.random(4, 8) * 0.75) // fertility rate and mortality rate
	mother.role = "mother"
	
	father.numberOfKids = mother.numberOfKids
	father.role = "father"


	father.spouse = mother.fullname.first + " " + mother.fullname.last
	mother.spouse = father.fullname.first + " " + father.fullname.last

	family.push(father, mother)

	for (var i = 1; i <= mother.numberOfKids; i++) {
		let child = character(undefined, surname)
		child.role = "child"
		child.father = father.fullname.first + " " + father.fullname.last 
		child.mother = mother.fullname.first + " " + mother.fullname.last
		family.push(child)
	}

	return family

}

 
module.exports = getFamily