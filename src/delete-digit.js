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
  let number = n.toString();
  let max = 0;
  for (let i = 0; i < number.length; i++) {
    let nnum = +(number.substring(0, i) + number.substring(i+1, number.length));
    if (nnum > max) {
      max = nnum;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
