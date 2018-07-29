const prompt = require('prompt');

/** Prompt for password if none provided, then resolve the command */
module.exports = (user, password, cmd) => {
  const resolveKey = require('./resolveKey');
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
          resolveKey(user, result.password, cmd.type);
        } else {
          console.error(err);
          process.exit(34);
        }
      }
    );
  } else {
    resolveKey(user, password, cmd.type);
  }
};
