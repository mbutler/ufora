let dice = require('./dice.js')
let kin = require('./kin.js')

let village = []

let numberOfKin = dice.d12() + dice.d12() + dice.d12()

for (var i = 0; i < numberOfKin; i++) {
  let newFam = kin()
  village.push(newFam)
}

console.log(JSON.stringify(village))
