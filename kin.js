let _ = require('lodash')
let character = require('./character.js')
let family = require('./family.js')

let kin = []

let firstGeneration = family()
let greatgrandfather = _.find(firstGeneration, ["role", "father"])
let surname = greatgrandfather.fullname.last

marriage(firstGeneration)

function marriage(generation) {
	_.forEach(generation, function(familyMember) {
		if (familyMember.gender === "female" && familyMember.role === "child" && isMarried() === true ) {
			let husband = character("male", undefined)
			husband.role = "inlaw"
			generation.push(husband)
			familyMember.maidenName = familyMember.fullname.last
			familyMember.fullname.last = husband.fullname.last
			familyMember.spouse = husband.fullname.first + " " + husband.fullname.last
			husband.spouse = familyMember.fullname.first + " " + familyMember.fullname.last
		} else if (familyMember.gender === "male" && familyMember.role === "child" && isMarried() === true) {
			let wife = character("female", undefined)
			wife.role = "inlaw"
			wife.maidenName = wife.fullname.last
			wife.fullname.last = familyMember.fullname.last
			wife.spouse = familyMember.fullname.first + " " + familyMember.fullname.last
			familyMember.spouse = wife.fullname.first + " " + wife.fullname.last
			generation.push(wife)
		}
	})
}

function isMarried() {
	let married = _.random(1, 100)

	if (married < 90) {
		return true
	} else {
		return false
	}
}

kin.push(firstGeneration)

//console.log(firstGeneration)
console.log(JSON.stringify(kin))