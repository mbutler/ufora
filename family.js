let _ = require('lodash')
let character = require('./character.js')

function getFamily (name) {
	let family = []

	if (name === undefined) {
		var father = character("male", undefined)
	} else {
		var father = character("male", name)
	}

	
	father.numberOfKids = _.random(0, 12)
	father.role = "father"

	let surname = father.fullname.last

	let mother = character("female", surname)

	mother.numberOfKids = father.numberOfKids
	mother.role = "mother"

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