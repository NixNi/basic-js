const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 0;
  let cur = '';
  let newstr = '';
  for (let c of str) {
    if (cur != c) {
      if (count > 1) newstr += count
      newstr += cur
      cur = c;
      count = 1
    } else {
      count++
    }
  }
  if (count > 1) newstr += count
    newstr += cur
  return newstr;
}

module.exports = {
  encodeLine
};
