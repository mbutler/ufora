let _ = require('lodash')
let fs = require('fs')
let getVillage = require('./village.js')
let character = require('./character.js')
let PDFDocument = require('pdfkit')

var nameWidth, nameHeight
    //let village = getVillage()
    //let villageName = _.kebabCase(village.demographics.name)

let testPerson = character(undefined, undefined)
let testPersonName = testPerson.fullname.first + " " + testPerson.fullname.last
    //let testPersonName = "Matthew Butler"

const doc = new PDFDocument({
    layout: 'portrait',
    size: [612, 792],
    margin: 27
})

doc.pipe(fs.createWriteStream('./' + _.snakeCase(testPersonName) + '.pdf'))

var x = doc.x,
    y = doc.y,
    h = 300,
    w = 400
var options = { width: w, align: 'center' }

// rect(x, y, width, height)
doc.rect(27, 27, 558, 36)
    .fillOpacity(0.2)
    .fill('#e5bd80')
    .fontSize(36)
    .fill('red')
    .font('./fonts/eaves-petite-caps.ttf')
    .text(testPersonName, { continued: true })

nameHeight = doc.currentLineHeight()

doc.fontSize(14)
    .font('./fonts/noto-sans-italic.ttf')
    .fill('black')
    .text("(human " + testPerson.gender + ")", 30, nameHeight)
    .moveDown()

//ac, hp, speed
doc.fontSize(12)
    .font('./fonts/noto-sans-bold.ttf')
    .fill('black')
    .text("AC ", { continued: true })
    .font('./fonts/noto-sans-regular.ttf')
    .text('5', { continued: true })

doc.moveTo(27, 27)
    .lineTo(585, 27)
    .stroke()
    .moveTo(27, 63)
    .lineTo(585, 63)
    .stroke()

doc.end()

/*
fs.writeFile(villageName, JSON.stringify(village, null, 4), function(err) {
    if (err) return console.log(err)
    console.log(villageName + " has been generated")
})
*/