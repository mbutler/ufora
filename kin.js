let _ = require('lodash')
let character = require('./character.js')
let family = require('./family.js')

let kin = []

let firstGeneration = family()
let greatgrandfather = _.find(firstGeneration, ["role", "father"])
let surname = greatgrandfather.fullname.last

_.forEach(firstGeneration, function(familyMember) {
	if (familyMember.gender === "female" && familyMember.role === "child") {
		let husband = character("male", undefined)
		firstGeneration.push(husband)
		familyMember.fullname.last = husband.fullname.last
		familyMember.spouse = husband.fullname.first + " " + husband.fullname.last
		husband.spouse = familyMember.fullname.first + " " + familyMember.fullname.last

	}
})

kin.push(firstGeneration)

//console.log(firstGeneration)
console.log(JSON.stringify(kin))