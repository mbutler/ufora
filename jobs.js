let _ = require('lodash')

let job = [
  'Farmer',
  'Farmer',
  'Farmer',
  'Farmer',
  'Farmer',
  'Farmer',
  'Farmer',
  'Farmer',
  'Farmer',
  'Farmer',
  'Farmer',
  'Farmer',
  'Fisher',
  'Fisher',
  'Fisher',
  'Fisher',
  'Fisher',
  'Hunter',
  'Hunter',
  'Hunter',
  'Hunter',
  'Trapper',
  'Trapper',
  'Trapper',
  'Trapper',
  'Trapper',
  'Leatherworker',
  'Potter',
  'Armorer',
  'Smith',
  'Fletcher',
  'Thief',
  'Soldier',
  'Crafter',
  'Homemaker',
  'Builder',
  'Barkeep',
  'Candlemaker',
  'Cartographer',
  'Miller',
  'Entertainer'
]

function getJob () {
  let jobTitle = _.sample(job)
  return jobTitle
}

module.exports = {
  getJob: getJob
}
