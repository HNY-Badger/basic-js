const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!sampleActivity || (typeof(sampleActivity) !== 'string' && !(sampleActivity instanceof String))) {
    return false;
  }
  let N = parseFloat(sampleActivity);
  const k = 0.693 / HALF_LIFE_PERIOD;
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / N) / k)

  return result >= 0 && isFinite(result) ? result : false;
}

module.exports = {
  dateSample
};
