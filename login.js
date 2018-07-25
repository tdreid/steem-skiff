const prompt = require('prompt');

const steem = require('steem');
steem.api.setOptions({ url: 'https://api.steemit.com' });

const checkLogin = (check_user, check_password) => {
  const wif = steem.auth.toWif(check_user, check_password, 'posting');
  steem.api.getAccounts([check_user], (err, result) => {
    if (!err) {
      if (result.length > 0) {
        const public_posting_wif = result[0].posting.key_auths[0][0];
        let isValid = false;
        try {
          isValid = steem.auth.wifIsValid(wif, public_posting_wif);
        } catch (anything) {
          console.error(anything);
          // isValid remains false
        }
        console.log(`Password ${isValid ? 'is' : 'is not'} valid.`);
      }
    } else {
      console.error(err);
      process.exit(2);
    }
  });
};

module.exports = (user, password) => {
  if (!password) {
    prompt.message = '';
    prompt.start();
    prompt.get(
      [
        {
          name: 'password',
          hidden: true,
          replace: '*',
          description: 'Enter password',
          required: true
        }
      ],
      (err, result) => {
        if (!err) {
          checkLogin(user, result.password);
        } else {
          console.error(err);
          process.exit(1);
        }
      }
    );
  } else {
    checkLogin(user, password);
  }
};
