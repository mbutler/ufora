let _ = require('lodash')
let namer = require('./namer.js')
let dice = require('./dice.js')
let jobs = require('./jobs.js')

function getCharacter (gender, lastName) {
  let character = {}

  character.gender = gender || _.sample(['male', 'female'])

  let fullname = namer.getPersonName(character.gender, lastName)

  character.fullname = fullname

  function mod (ability) {
    let mod = Math.floor((ability - 10) / 2)
    return mod
  }

  character.job = jobs.getJob()

  character.strength = dice.ability()
  character.dexterity = dice.ability()
  character.constitution = dice.ability()
  character.intelligence = dice.ability()
  character.wisdom = dice.ability()
  character.charisma = dice.ability()
  character.strMod = mod(character.strength)
  character.dexMod = mod(character.dexterity)
  character.conMod = mod(character.constitution)
  character.intMod = mod(character.intelligence)
  character.wisMod = mod(character.wisdom)
  character.chaMod = mod(character.charisma)
  character.hp = dice.d8() + character.conMod
  
  return character
}

module.exports = getCharacter
