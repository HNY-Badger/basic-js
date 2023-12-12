const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse === false ? true : false;
  }
  getEncChar(m, k) {
    // 65 - A, 90 - Z,
    // 0 - A, 26 - Z, 26 - dif
    const shift = 65;
    let dif = m + k - shift * 2;
    while (dif + shift > 90) {
      dif -= 26;
    }
    return String.fromCharCode(dif + shift);
  }
  getDecChar(m, k) {
    // 65 - A, 90 - Z,
    // 0 - A, 26 - Z, 27 - dif

    // T - 84, X - 88, dif - 4
    // L - 76, F - 70, dif - 6
    // X - 88, V - 86, dif - 2
    // Q - 81, K - 75, dif - 6

    // G - 71, E - 69, dif - 2; F - 70, H - 72, dif - 2;
    const shift = 65;
    let dif = m - shift;
    while (dif < 65) {
      dif += 26;
    }
    dif = dif - k + shift * 2;
    while (dif > 90) {
      dif -= 26;
    }
    return String.fromCharCode(dif);
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let mes = this.reverse ? message.toUpperCase().split('').reverse().join('') : message.toUpperCase();
    let keyword = '';
    let keyCount = 0;
    let encryption = '';
    while (keyword.length < mes.length) {
      keyword += this.reverse ? key.toUpperCase().split('').reverse().join('') : key.toUpperCase();
    }
    for (let i = 0; i < mes.length; i++) {
      if (!(65 <= mes.charCodeAt(i) && mes.charCodeAt(i) <= 90)) {
        encryption += mes[i];
        continue;
      }
      encryption += this.getEncChar(mes.charCodeAt(i), keyword.charCodeAt(keyCount));
      keyCount++;
    }
    return this.reverse ? encryption.split('').reverse().join('') : encryption;
  }
  decrypt(message, key) {
    const shift = 64;
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let mes =  message.toUpperCase();
    let keyword = '';
    let keyCount = 0;
    let decryption = '';
    while (keyword.length < mes.length) {
      keyword += this.reverse ? key.toUpperCase().split('').reverse().join('') : key.toUpperCase();
    }
    for (let i = 0; i < mes.length; i++) {
      if (!(65 <= mes.charCodeAt(i) && mes.charCodeAt(i) <= 90)) {
        decryption += mes[i];
        continue;
      }
      decryption += this.getDecChar(mes.charCodeAt(i), keyword.charCodeAt(keyCount));
      keyCount++;
    }
    return decryption;
  }
}

module.exports = {
  VigenereCipheringMachine
};
