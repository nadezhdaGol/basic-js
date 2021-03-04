const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  
  if (!Array.isArray(arr)) throw new Error();

  let trArray = arr.map(function (value, index, array) {

    if (value === '--double-prev') {
      if (array[index - 2] === '--discard-next') {
        return 'nothing';
      } else {
        return array[index - 1];
      }
    } else if (value === '--double-next') {
      return array[index + 1];
    } else if (array[index + 1] === '--discard-prev') {
      return 'nothing';
    } else if (value === '--discard-prev') {
      return 'nothing';
    } else if (array[index - 1] === '--discard-next') { 
      return 'nothing';
    } else if (value === '--discard-next') {
      return 'nothing';
    } else {
      return array[index];
    }
    
  });

  let filteredArray = trArray.filter(val => val !== 'nothing' && val !== undefined);

  return filteredArray;

};
