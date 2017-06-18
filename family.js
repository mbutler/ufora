let _ = require('lodash')
let character = require('./character.js')

function getFamily (fatherName, motherName) {
  let family = []

  //splits a name into an array of words, drops the first element, then joins them back into a string
  let surname = _(fatherName).words().drop().join(' ')

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
