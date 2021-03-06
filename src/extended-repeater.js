const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  
  let string = String(str);
  
  let rep = options['repeatTimes'];
  if (rep === undefined) {
    rep = 1;
  }
  
  let sep = options['separator'];
  if (sep === undefined) {
    sep = '+';
  } else {
    sep = String(sep);
  }
  
  let add = options['addition'];
  if (add === undefined) {
    add = '';
  } else {
    add = String(add);
  }
  
  let addRT = options['additionRepeatTimes'];
  if (addRT === undefined) {
    addRT = 1;
  }
  
  let addS = options['additionSeparator'];
  if (addS === undefined) {
    addS = '|';
  } else {
    addS = String(addS);
  }

  let newAdd = add + addS;
  newAdd = newAdd.repeat(addRT);
  newAdd = newAdd.slice(0, newAdd.length - addS.length);

  let newStr = string + newAdd + sep;
  newStr = newStr.repeat(rep);
  newStr = newStr.slice(0, newStr.length - sep.length);

  return newStr;
  
};
  
