let dice = require('./dice.js')
let kin = require('./kin.js')
let _ = require('lodash')

let village = []

let numberOfKin = _.random(5, 30)
//let numberOfKin = 1

for (var i = 0; i < numberOfKin; i++) {
  let newFam = kin()
  village.push(newFam)
}

console.log(JSON.stringify(village))
