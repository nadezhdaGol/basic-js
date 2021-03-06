const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    
    let depth = 1;
    let a = 0;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        a = this.calculateDepth(arr[i]) + 1;
        if (a > depth) {
          depth = a;
        }
      }
    }

    return depth;
    
  }
};
