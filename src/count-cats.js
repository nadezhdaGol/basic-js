const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let cats = [];
  let newBackyard = backyard.flat();

  for (let i = 0; i < newBackyard.length; i++) {
    if (newBackyard[i] == '^^') {
      cats.push(newBackyard[i]);
    }
  }
  
  return cats.length;
};
