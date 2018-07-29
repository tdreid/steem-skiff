const prompt = require('prompt');
const resolveAccount = require('./resolveTestAccount');

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
          resolveAccount(user, result.password);
        } else {
          console.error(err);
          process.exit(34);
        }
      }
    );
  } else {
    resolveAccount(user, password);
  }
};
