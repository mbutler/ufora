let _ = require('lodash')

function d4 () {
  let roll = _.random(1, 4)
  return roll
}

function d6 () {
  let roll = _.random(1, 6)
  return roll
}

function d8 () {
  let roll = _.random(1, 8)
  return roll
}

function d10 () {
  let roll = _.random(1, 10)
  return roll
}

function d12 () {
  let roll = _.random(1, 12)
  return roll
}

function ability () {
  let total = d6() + d6() + d6()
  return total
}

module.exports = {
  d4: d4,
  d6: d6,
  d8: d8,
  d10: d10,
  d12: d12,
  ability: ability
}
