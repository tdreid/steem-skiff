const prompt = require('prompt');
const checkCredential = require('./checkCredential');

module.exports = (mode, user, password, cmd) => {
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
          checkCredential(mode, user, result.password, cmd.type);
        } else {
          console.error(err);
          process.exit(1);
        }
      }
    );
  } else {
    checkCredential(mode, user, password, cmd.type);
  }
};
