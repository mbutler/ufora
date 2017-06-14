let _ = require('lodash')
let character = require('./character.js')

function getFamily (fatherName, motherName) {
  let family = []

  let surname = _.split(fatherName, ' ')
  surname = surname[1]

  let numberOfKids = _.round(_.random(4, 8) * 0.75) // fertility rate and mortality rate

  for (var i = 1; i <= numberOfKids; i++) {
    let child = character(undefined, surname)
    child.role = 'child'
    child.father = fatherName
    child.mother = motherName
    family.push(child)
  }

  return family
}

module.exports = getFamily
