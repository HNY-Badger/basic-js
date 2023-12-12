const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let letters = [];
  if (!members || !Array.isArray(members)){
    return false;
  }
  for (let i = 0; i < members.length; i++) {
    if (!members[i] || typeof(members[i]) !== 'string') {
      continue
    }
    let corrMember = members[i];
    corrMember = corrMember.trim();
    corrMember = corrMember.toUpperCase();
    letters.push(corrMember.charAt(0));
  }
  return letters.sort().join().replaceAll(',', '');
}

module.exports = {
  createDreamTeam
};
