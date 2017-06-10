let _ = require('lodash')
let character = require('./character.js')

let family = []

let father = character("male", undefined)
father.numberOfKids = _.random(0, 12)
father.role = "father"

let surname = father.fullname.last

let mother = character("female", surname)

mother.numberOfKids = father.numberOfKids
mother.role = "mother"

family.push(father, mother)

for (var i = 1; i <= mother.numberOfKids; i++) {
	let child = character(undefined, surname)
	child.role = "child"
	family.push(child)
}

console.log(family)