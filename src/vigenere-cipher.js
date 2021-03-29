const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct) {
    this.direct = true;
    if (direct === false) {
      this.direct = false;
    }
  }


  encrypt(message, key) {
    if (arguments.length < 2) throw new Error;

    let strArr = message.toLowerCase().split('');

    let lettersArr = strArr.filter(val => val.match(/[a-z]/));
    let lettersStr = lettersArr.join('');

    let keyLettersArrShort = [];
    let keyLow = key.toLowerCase();
    for (let i = 0; i < lettersArr.length; i++) {
      keyLettersArrShort.push(keyLow[i % keyLow.length]);
    }
    let keyLettersStrShort = keyLettersArrShort.join('');

    let numLetters = [];
    for (let j = 0; j < lettersStr.length; j++) {
      numLetters.push(lettersStr.charCodeAt(j) - 97);
    }

    let numKey = [];
    for (let a = 0; a < keyLettersStrShort.length; a++) {
      numKey.push(keyLettersStrShort.charCodeAt(a) - 97);
    }

    let numСipher = [];
    for (let b = 0; b < numLetters.length; b++) {
      if ((numLetters[b] + numKey[b]) >= 26) {
        numСipher.push(numLetters[b] + numKey[b] - 26);
      } else {
        numСipher.push(numLetters[b] + numKey[b]);
      }
    }

    let cipher = [];
    for (let h = 0; h < numСipher.length; h++) {
      cipher.push(String.fromCharCode(numСipher[h] + 97));
    }

    let result = [];
    let count = 0;
    for (let r = 0; r < strArr.length; r++) {
      if (!strArr[r].match(/[a-z]/)) {
        result.push(strArr[r]);
        count++;
      } else {
        result.push(cipher[r - count]);
      }
    }

    if (!this.direct) result.reverse();
    return result.join('').toUpperCase();
  }


  decrypt(encryptedMessage, key) {
    if (arguments.length < 2) throw new Error;

    let encryptedMessageArr = encryptedMessage.toLowerCase().split('');

    let cipherArr = encryptedMessageArr.filter(val => val.match(/[a-z]/));
    let cipherStr = cipherArr.join('');

    let keyLettersArrShort = [];
    let keyLow = key.toLowerCase();
    for (let i = 0; i < cipherArr.length; i++) {
      keyLettersArrShort.push(keyLow[i % keyLow.length]);
    }
    let keyLettersStrShort = keyLettersArrShort.join('');

    let numCipher = [];
    for (let j = 0; j < cipherStr.length; j++) {
      numCipher.push(cipherStr.charCodeAt(j) - 97);
    }

    let numKey = [];
    for (let a = 0; a < keyLettersStrShort.length; a++) {
      numKey.push(keyLettersStrShort.charCodeAt(a) - 97);
    }

    let numStr = [];
    for (let b = 0; b < numCipher.length; b++) {
      if ((numCipher[b] - numKey[b]) < 0) {
        numStr.push(numCipher[b] - numKey[b] + 26);
      } else {
        numStr.push(numCipher[b] - numKey[b]);
      }
    }

    let string = [];
    for (let h = 0; h < numStr.length; h++) {
      string.push(String.fromCharCode(numStr[h] + 97));
    }

    let result = [];
    let count = 0;
    for (let r = 0; r < encryptedMessageArr.length; r++) {
      if (!encryptedMessageArr[r].match(/[a-z]/)) {
        result.push(encryptedMessageArr[r]);
        count++;
      } else {
        result.push(string[r - count]);
      }
    }

    if (!this.direct) result.reverse();
    return result.join('').toUpperCase();
  }

}

module.exports = VigenereCipheringMachine;
