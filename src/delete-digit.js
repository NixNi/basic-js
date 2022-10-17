const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let st = String(n)
  let e = 0
  for (let i = 0; i < st.length; i++) {
    if (Number(st.slice(0, i) + st.slice(i + 1)) > e) e = Number(st.slice(0, i) + st.slice(i + 1))
  }
  return e
}

module.exports = {
  deleteDigit
};
