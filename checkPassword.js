const steem = require('steem');
steem.api.setOptions({ url: 'https://api.steemit.com' });

module.exports = (user, password, type) => {
  steem.api.getAccounts([user], (err, result) => {
    const wif = steem.auth.toWif(user, password, type);
    if (!err) {
      if (result.length > 0) {
        const public_wif = result[0][type].key_auths[0][0];
        let isValid = false;
        try {
          isValid = steem.auth.wifIsValid(wif, public_wif);
        } catch (anything) {
          console.error(anything);
          // isValid remains false
        }
        console.log(`Password ${isValid ? 'is' : 'is not'} valid.`);
      } else {
        console.log(`User '${user}' not found.`);
      }
    } else {
      console.error(err);
      process.exit(2);
    }
  });
};
