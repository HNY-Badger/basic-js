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
  let toSort = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      toSort.push(arr[i]);
    }
  }
  toSort = toSort.sort((a, b) => a - b);
  let sortIndex = 0;
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      out.push(-1);
    } else {
      out.push(toSort[sortIndex]);
      sortIndex++;
    }
  }
  return out;
}

module.exports = {
  sortByHeight
};
