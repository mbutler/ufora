let fs = require('fs')
let kin = require('./kin.js')
let namer = require('./namer.js')
let _ = require('lodash')

//average kin size is 25
function createCity(name, population) {
    let city = []
    let pop = 0

    let cityName = name || namer.getTownName()

    //magic number 29 found through tuning population outcomes
    let numberOfKin = (population / 29) || _.random(5, 30)

    if (numberOfKin < 1) { numberOfKin = 1}

    for (var i = 0; i < numberOfKin; i++) {
        let newFam = kin()
        city.push(newFam)
    }

    _.forEach(city, function(kin) {
        _.forEach(kin, function(member) {
            pop++
            member.home = cityName
        })
    })

    city.push({ "CityName": cityName, "population": pop })
    city.demographics = { "name": cityName, "population": pop }

    console.log('pop: ' + city.demographics.population)

    fs.writeFile(_.lowerCase(cityName)+ '.json', JSON.stringify(city, null, 4), function(err) {
        if (err) return console.log(err)
        console.log(_.capitalize(cityName) + " has been generated")
    })

    return JSON.stringify(city, null, 4)    
    
}

createCity('test', 10000)

