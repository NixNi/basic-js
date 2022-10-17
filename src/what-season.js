const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  let e = date
  try {
    e.setYear(1000)
  } catch {
    throw new Error('Invalid date!')
  }
  
  //console.log(String(date))
  //let season = Number(String(date).slice(String(date).indexOf('-')+1, String(date).lastIndexOf('-')))
  let season = date.getMonth();
  console.log(season)
  if (season >= 2 && season < 5) return 'spring'
  if (season >= 5 && season < 8) return 'summer'
  if (season >= 8 && season < 11) return 'autumn'
  if (season >= 11 || season < 2) return 'winter'
  return
}
//console.log(Date.prototype.toString.call(new Date()).setYear(1000))
console.log(new Date().setYear(1000))
module.exports = {
  getSeason
};
