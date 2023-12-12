const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let object = new Object();
  for (domain of domains) {
    let shorts = domain.split('.');
    let short = '';
    for (let j = shorts.length - 1; j >= 0; j--) {
      short += `.${shorts[j]}`;
      if (object.hasOwnProperty(short)) {
        object[short] = object[short] + 1;
      } else {
        object[short] = 1;
      }
    }
  }
  return object;
}

module.exports = {
  getDNSStats
};
