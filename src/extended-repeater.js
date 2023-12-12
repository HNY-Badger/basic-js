const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = options['separator'] ? options['separator'] : '+';
  let addition = options['addition'] ? options['addition'] : '';
  if (options['addition'] === false) {
    addition = 'false';
  } else if (options['addition'] === null) {
    addition = 'null';
  }
  let additionSeparator = options['additionSeparator'] ? options['additionSeparator'] : '|';
  for (let i = 1; i < options['additionRepeatTimes']; i++) {
    addition += `${additionSeparator}${options['addition']}`;
  }
  let text = str;
  for (let i = 1; i < options['repeatTimes']; i++) {
    text += `${addition}${separator}${str}`;
  }

  return `${text}${addition}`;
}

module.exports = {
  repeater
};
