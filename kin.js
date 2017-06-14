let _ = require('lodash')
let character = require('./character.js')
let family = require('./family.js')

function marriage (generation) {
  _.forEach(generation, function (familyMember) {
    if (familyMember.gender === 'female' && familyMember.role === 'child' && isMarried() === true) {
      let husband = character('male', undefined)
      husband.role = 'inlaw'
      generation.push(husband)
      familyMember.maidenName = familyMember.fullname.last
      familyMember.fullname.last = husband.fullname.last
      familyMember.spouse = husband.fullname.first + ' ' + husband.fullname.last
      husband.spouse = familyMember.fullname.first + ' ' + familyMember.fullname.last
    } else if (familyMember.gender === 'male' && familyMember.role === 'child' && isMarried() === true) {
      let wife = character('female', undefined)
      wife.role = 'inlaw'
      wife.maidenName = wife.fullname.last
      wife.fullname.last = familyMember.fullname.last
      wife.spouse = familyMember.fullname.first + ' ' + familyMember.fullname.last
      familyMember.spouse = wife.fullname.first + ' ' + wife.fullname.last
      generation.push(wife)
    }
  })

  return generation
}

function isMarried () {
  let married = _.random(1, 100)

  if (married < 90) {
    return true
  } else {
    return false
  }
}

function nextGen (generation) {
  let secondGeneration = []

  _.forEach(generation, function (familyMember) {
    if (familyMember.role === 'child' && familyMember.spouse !== undefined) {
      let fam = []

      if (familyMember.gender === 'female') {
        familyMember.role = 'mother'
        secondGeneration.push(familyMember)
        fam = family(familyMember.spouse, familyMember.fullname.first + ' ' + familyMember.fullname.last)
      } else if (familyMember.gender === 'male') {
        familyMember.role = 'father'
        secondGeneration.push(familyMember)
        fam = family(familyMember.fullname.first + ' ' + familyMember.fullname.last, familyMember.spouse)
      }

      _.forEach(fam, function (member) {
        secondGeneration.push(member)
      })
    } else if (familyMember.role === 'child') {
      if (familyMember.gender === 'male') {
        familyMember.role = 'uncle'
      } else if (familyMember.gender === 'female') {
        familyMember.role = 'aunt'
      }

      secondGeneration.push(familyMember)
    } else {
      secondGeneration.push(familyMember)
    }
  })

  // marriage(secondGeneration)

  return secondGeneration
}

function getKin () {
  let grandfather = character('male', undefined)
  let surname = grandfather.fullname.last
  let grandmother = character('female', undefined)

  grandmother.maidenName = grandmother.fullname.last
  grandmother.fullname.last = surname

  grandfather.role = 'grandfather'
  grandmother.role = 'grandmother'
  grandfather.spouse = grandmother.fullname.first + ' ' + grandmother.fullname.last
  grandmother.spouse = grandfather.fullname.first + ' ' + grandfather.fullname.last

  let firstGeneration = family(grandfather.fullname.first + ' ' + grandfather.fullname.last, grandmother.fullname.first + ' ' + grandmother.fullname.last)

  let firstGenMarried = marriage(firstGeneration)
  firstGenMarried.push(grandmother, grandfather)

  let secondGeneration = nextGen(firstGenMarried)

  return secondGeneration
}

module.exports = getKin
