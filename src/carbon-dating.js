const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  let num = +sampleActivity;

  if (typeof sampleActivity !== 'string' || isNaN(num) || num == '' || num == ' ' || num <= 0 || num >= 15) {
    return false;
  }

  let t = (Math.log(MODERN_ACTIVITY) - Math.log(num)) * HALF_LIFE_PERIOD / 0.693;
  return Math.ceil(t);

};
