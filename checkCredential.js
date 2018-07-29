/** Different routines check passwords or wifs */
module.exports = (mode, user, credential, type) => {
  switch (mode) {
    case 'password':
      const checkPassword = require('./checkPassword');
      checkPassword(user, credential, type);
      break;

    case 'wif':
      const checkWif = require('./checkWif');
      checkWif(user, credential, type);
      break;

    default:
      console.log("Valid options for <mode> are 'password' and 'wif'.");
  }
};
