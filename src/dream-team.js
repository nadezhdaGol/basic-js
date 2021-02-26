const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (!Array.isArray(members)) {
    return false;
  } else if (members.length == 0) {
    return null;
  }

  let activeMembers = [];
  for (let j = 0; j < members.length; j++) {
    if (typeof members[j] === 'string') {
      activeMembers.push(members[j]);
    }
  }

  let names = [];
  for (let i = 0; i < activeMembers.length; i++) {
    names.push(activeMembers[i].trim().slice(0, 1).toUpperCase());
  }

  return names.sort().join('');

};
