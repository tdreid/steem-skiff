const steem = require('steem');

/** Use steem-js to calculate a wif of given type from user/password pair */
module.exports = (user, password, type) => {
  console.log(steem.auth.toWif(user, password, type));
};
