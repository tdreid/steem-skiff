const steem = require('steem');

module.exports = (user, password, type) => {
  console.log(steem.auth.toWif(user, password, type));
};
