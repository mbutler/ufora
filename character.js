let _ = require('lodash')
let namer = require('./namer.js')
let dice = require('./dice.js')
let jobs = require('./jobs.js')
let description = require('./description.js')


function getWeapon(job) {
    let weapon = _.sample([{ name: 'shortsword', damage: '1d6 piercing' }, { name: 'dagger', damage: '1d4 piercing' }, { name: 'hammer', damage: '1d4 bludgeoning' }, { name: 'club', damage: '1d4 bludgeoning' }])
    if (job == "Farmer") { weapon = { name: 'sickle', damage: '1d4 slashing' }}
    if (job == "Hunter") { weapon = { name: 'shortbow', damage: '1d6 piercing' }}
    if (job == "Fisher") { weapon = { name: 'net', damage: 'thrown' }}
    if (job == "Lumberjack") { weapon = { name: 'handaxe', damage: '1d6 slashing' }}

    return weapon
}

function getCharacter(gender, lastName) {
    let character = {}

    character.gender = gender || _.sample(['male', 'female'])

    let fullname = namer.getPersonName(character.gender, lastName)

    character.fullname = fullname

    character.job = jobs.getJob()
    character.description = description()
    character.strength = dice.ability()
    character.dexterity = dice.ability()
    character.constitution = dice.ability()
    character.intelligence = dice.ability()
    character.wisdom = dice.ability()
    character.charisma = dice.ability()

    character.hp = dice.d8() + Math.floor((character.constitution - 10) / 2)
    character.ac = 10 + Math.floor((character.dexterity - 10) / 2)
    character.weapon = getWeapon(character.job)
    character.level = 0

    return character
}

module.exports = getCharacter