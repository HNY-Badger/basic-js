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
  let encode = '';
  let i = 0;
  let char = '';
  let counter = 0;
  while (i < str.length) {
    if (str[i] === char) {
      counter++;
      i++;
      continue;
    } else if (counter > 0) {
      encode += `${counter}${char}`;
      counter = 0;
      char = '';
    }

    if (str[i] === str[i+1]) {
      char = str[i];
      counter = 2;
      i += 2;
      continue;
    } else {
      encode += str[i];
      i++;
    }
  }
  if (counter > 0) {
    encode += `${counter}${char}`;
  }
  return encode;
}

module.exports = {
  encodeLine
};
