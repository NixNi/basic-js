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
  constructor(reverse=true) {
    this.reverse = !reverse
  }
  encrypt(str, code) {
    if (!str || !code) throw new Error('Incorrect arguments!')
    let newstr = '';
    str = str.toUpperCase();
    code = code.toUpperCase();
    let adapter = 0
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) < 91)
        newstr += String.fromCharCode((str.charCodeAt(i) + code.charCodeAt((i-adapter) % code.length) - 65 * 2) % 26 + 65)
      else { newstr += str[i]; adapter++}
    }
    return this.reverse ? newstr.split("").reverse().join("") : newstr;
  }
  decrypt(str, code) {
    if (!str || !code) throw new Error('Incorrect arguments!')
    let newstr = '';
    str = str.toUpperCase();
    code = code.toUpperCase();
    let adapter = 0
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) < 91) {
        let c = str.charCodeAt(i) - code.charCodeAt((i - adapter) % code.length)
        newstr += String.fromCharCode((c >= 0 ? c: 26 + c) + 65)
      }
      else { newstr += str[i]; adapter++ }
    }
    return this.reverse ? newstr.split("").reverse().join("") : newstr;
  }
}
const reverseMachine = new VigenereCipheringMachine(false);
//reverseMachine.encrypt('attack at dawn!', 'alphonse')// => '!ULLD XS XQHIEA'
console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))// => '!NWAD TA KCATTA'
module.exports = {
  VigenereCipheringMachine
};
