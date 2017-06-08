let _ = require('lodash')
let character = require('./character.js')

let family = []

let grandfather = character("male")
grandfather.numberOfKids = _.random(0, 12)
grandfather.role = "grandfather"

let grandmother = character("female", grandfather.name.last)
grandmother.numberOfKids = grandfather.numberOfKids
grandmother.role = "grandmother"


family.push(grandmother, grandfather)

//second generation

for (var i=0; i<grandmother.numberOfKids; i++) {
	let child = character(undefined, grandfather.name.last)
	child.role = "child"
	family.push(child)
}

_.forEach(family, function(member) {
	if (member.role === "child") {
		member.numberOfKids = _.random(0, 12)
	}
})

console.log(family)