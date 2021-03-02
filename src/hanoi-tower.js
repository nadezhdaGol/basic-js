const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  
  let turns = Math.pow(2, disksNumber) - 1,
      seconds = Math.floor(turns * 3600 / turnsSpeed);

  let result = {
    turns: turns,
    seconds: seconds
  };

  return new Object(result);
  
};
