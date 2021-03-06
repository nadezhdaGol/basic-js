const CustomError = require("../extensions/custom-error");

const chainMaker = {
  strArr: [],
  
  getLength() {
    return this.strArr.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.strArr.push('');
    } else {
      this.strArr.push(String(`( ${value} )`));
    }
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position > 0 && position <= this.getLength()) {
      this.strArr.splice(position - 1, 1);
    } else {
      this.strArr = [];
      throw new Error();
    }
    return this;
  },
  reverseChain() {
    this.strArr.reverse();
    return this;
  },
  finishChain() {
    let str = this.strArr.join('~~');
    this.strArr = [];
    return str;
  }
};

module.exports = chainMaker;
