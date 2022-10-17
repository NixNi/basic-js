const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!")
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if ('--discard-next' === arr[i]) {
      i++
      continue
    }
    if ('--discard-prev' === arr[i]) {
      if(i>0 && arr[i-2] !== '--discard-next')
      newArr.pop()
      continue
    }
    if ('--double-next' === arr[i]) {
      if (i < arr.length - 1)
      newArr.push(arr[i + 1])
      continue
    }
    if ('--double-prev' === arr[i] ) {
      if (i > 0 && arr[i - 2] !== '--discard-next')
      newArr.push(arr[i - 1])
      continue
    }
    newArr.push(arr[i])
  }
  return newArr
}

module.exports = {
  transform
};
