const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  for (let i = 0, l = arr.length; i < l - 1; i++) {
    let imin = i;
    for (let j = i + 1; j < l; j++) {
      if (arr[j] === -1) continue
      if (arr[imin] > arr[j]) {
        imin = j;
      }
    }
    if (imin !== i && arr[imin] !== -1) {
      [arr[i], arr[imin]] = [arr[imin], arr[i]];
    }
  }
  return arr;
}
//console.log(sortByHeight([-1, 150, 170, -1, -1, 160, 180]))
module.exports = {
  sortByHeight
};
