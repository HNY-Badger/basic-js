const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} larr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let larr = [...arr];
  let out = [];
  let i = 0;
  while(i < larr.length) {
    switch (larr[i]) {
      case '--discard-next':
        larr[i+1] = null;
        break;
      case '--discard-prev':
        if (larr[i-1]) {
          out.pop();
        }
        larr[i-1] = null;
        break;
      case '--double-next':
        if (larr[i+1]) {
          out.push(larr[i+1]);
        }
        break;
      case '--double-prev':
        if (larr[i-1]) {
          out.push(larr[i-1]);;
        }
        break;
      default:
        if (larr[i]) {
          out.push(larr[i]);
        }
        break;
    }
    i++;
  }
  return out;
}

module.exports = {
  transform
};
