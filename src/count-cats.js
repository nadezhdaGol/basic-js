const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  let cats = [];
  let newArr = array.flat();

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == '^^') {
      cats.push(newArr[i]);
    }
  }
  return cats.length;
};
