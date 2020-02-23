let _ = require('lodash')

let job = [
  'Lumberjack',
  'Lumberjack',
  'Lumberjack',
  'Farmer',
  'Farmer',
  'Farmer',
  'Farmer',
  'Fisher',
  'Fisher',
  'Fisher',
  'Hunter',
  'Hunter',
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
