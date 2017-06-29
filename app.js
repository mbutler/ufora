let _ = require('lodash')
let fs = require('fs')
let getVillage = require('./village.js')
let character = require('./character.js')
let PDFDocument = require('pdfkit')

//user may pass in number of kin. Keep to about 150 or else run out of memory
let village = getVillage(process.argv[2])
let villageName = _.kebabCase(village.demographics.name)
let villagePop = _.find(village, function(o) { return o.population })

const doc = new PDFDocument({
    layout: 'portrait',
    size: [612, 300],
    margin: 27
})

doc.pipe(fs.createWriteStream('./' + _.snakeCase(villageName) + '.pdf'))

//title page
doc.moveDown()
    .moveDown()
    .moveDown()
    .fontSize(14)
    .font('./fonts/noto-sans-italic.ttf')
    .fill('black')
    .text("The " + _.sample(["village", "hamlet", "town", "purlieu", "burg"]) + " of", { align: 'center' })
    .fontSize(36)
    .fill('red')
    .font('./fonts/eaves-petite-caps.ttf')
    .text(villageName, { align: 'center' })
    .fontSize(14)
    .font('./fonts/noto-sans-italic.ttf')
    .fill('black')
    .text("population " + villagePop.population, { align: 'center' })


function createStatBlock(commoner) {

    let father, mother, spouse
    let commonerName = commoner.fullname.first + " " + commoner.fullname.last

    doc.addPage()

    if (commoner.age < 16) {
        commoner.job = "Child"
    }

    if (commoner.father) {
        father = commoner.father
    } else {
        father = "None"
    }

    if (commoner.mother) {
        mother = commoner.mother
    } else {
        mother = "None"
    }

    if (commoner.spouse) {
        spouse = commoner.spouse
    } else {
        spouse = "None"
    }

    // rect(x, y, width, height)
    doc.rect(27, 27, 558, 36)
        .fillOpacity(0.2)
        .fill('#e5bd80')
        .fontSize(36)
        .fill('red')
        .font('./fonts/eaves-petite-caps.ttf')
        .text(commonerName, { continued: true })

    nameHeight = doc.currentLineHeight()

    doc.fontSize(14)
        .font('./fonts/noto-sans-italic.ttf')
        .fill('black')
        .text("(human " + commoner.gender + ")", 30, nameHeight)
        .moveDown()

    doc.fontSize(14)
        .font('./fonts/noto-sans-bold.ttf')
        .text(commoner.job + ', age ' + commoner.age)
        .fontSize(12)
        .font('./fonts/noto-sans-italic.ttf')
        .text(commoner.description)

    //ac, hp, speed
    doc.fontSize(12)
        .font('./fonts/noto-sans-bold.ttf')
        .text("AC: ", { continued: true })
        .font('./fonts/noto-sans-regular.ttf')
        .text(commoner.ac, { continued: true })
        .font('./fonts/noto-sans-bold.ttf')
        .text("  HP: ", { continued: true })
        .font('./fonts/noto-sans-regular.ttf')
        .text(commoner.hp, { continued: true })
        .font('./fonts/noto-sans-bold.ttf')
        .text('  Speed: ', { continued: true })
        .font('./fonts/noto-sans-regular.ttf')
        .text("30'")

    doc.font('./fonts/noto-sans-bold.ttf')
        .text('STR: ', { continued: true })
        .font('./fonts/noto-sans-regular.ttf')
        .text(commoner.strength + '(' + _.toString(commoner.strMod) + ')  ', { continued: true })
        .font('./fonts/noto-sans-bold.ttf')
        .text('DEX: ', { continued: true })
        .font('./fonts/noto-sans-regular.ttf')
        .text(commoner.dexterity + '(' + commoner.dexMod + ')  ', { continued: true })
        .font('./fonts/noto-sans-bold.ttf')
        .text('CON: ', { continued: true })
        .font('./fonts/noto-sans-regular.ttf')
        .text(commoner.constitution + '(' + commoner.conMod + ')  ', { continued: true })
        .font('./fonts/noto-sans-bold.ttf')
        .text('INT: ', { continued: true })
        .font('./fonts/noto-sans-regular.ttf')
        .text(commoner.intelligence + '(' + commoner.intMod + ')  ', { continued: true })
        .font('./fonts/noto-sans-bold.ttf')
        .text('WIS: ', { continued: true })
        .font('./fonts/noto-sans-regular.ttf')
        .text(commoner.wisdom + '(' + commoner.wisMod + ')  ', { continued: true })
        .font('./fonts/noto-sans-bold.ttf')
        .text('CHA: ', { continued: true })
        .font('./fonts/noto-sans-regular.ttf')
        .text(commoner.charisma + '(' + commoner.chaMod + ')  ')
        .font('./fonts/noto-sans-bold.ttf')
        .text('Senses: ', { continued: true })
        .font('./fonts/noto-sans-regular.ttf')
        .text('passive Perception ' + _.toString(Math.floor((commoner.wisdom - 10) / 2) + 10))
        .font('./fonts/noto-sans-bold.ttf')
        .text('Languages: ', { continued: true })
        .font('./fonts/noto-sans-regular.ttf')
        .text('Common')
        .font('./fonts/noto-sans-bold.ttf')
        .text('Attack: ', { continued: true })
        .font('./fonts/noto-sans-regular.ttf')
        .text(commoner.weapon.name + ', ' + commoner.weapon.damage)

    doc.font('./fonts/noto-sans-bold.ttf')
        .text('Father: ', { continued: true })
        .font('./fonts/noto-sans-regular.ttf')
        .text(father + '  ', { continued: true })
        .font('./fonts/noto-sans-bold.ttf')
        .text('Mother: ', { continued: true })
        .font('./fonts/noto-sans-regular.ttf')
        .text(mother + '  ', { continued: true })
        .font('./fonts/noto-sans-bold.ttf')
        .text('Spouse: ', { continued: true })
        .font('./fonts/noto-sans-regular.ttf')
        .text(spouse + '  ')
        .moveDown()
        .moveDown()

    doc.moveTo(27, 27)
        .lineTo(585, 27)
        .stroke()
        .moveTo(27, 63)
        .lineTo(585, 63)
        .stroke()
}

_.forEach(village, function(kin) {
    _.forEach(kin, function(member) {

        if (member.fullname !== undefined) {
            createStatBlock(member)
        }

    })
})

doc.end()

fs.writeFile(villageName, JSON.stringify(village, null, 4), function(err) {
    if (err) return console.log(err)
    console.log(_.capitalize(villageName) + " has been generated")
})