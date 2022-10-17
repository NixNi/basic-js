const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let { repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|' } = options;
  let newaddition = (`${addition}${additionSeparator}`).repeat(additionRepeatTimes)
  newaddition = newaddition.slice(0, newaddition.length - additionSeparator.length)
  let newstr = (`${str}${newaddition}${separator}`).repeat(repeatTimes)
  newstr = newstr.substring(0, newstr.length - separator.length)
  return newstr;
}

module.exports = {
  repeater
};
