const prompt = require('prompt');
const checkCredential = require('./checkCredential');

/** Prompt for the credential if none was provided */
module.exports = (mode, user, credential, cmd) => {
  if (!credential) {
    prompt.message = '';
    prompt.start();
    prompt.get(
      [
        {
          name: 'credential',
          hidden: true,
          replace: '*',
          description: 'Enter credential',
          required: true
        }
      ],
      (err, result) => {
        if (!err) {
          checkCredential(mode, user, result.credential, cmd.type);
        } else {
          console.error(err);
          process.exit(1);
        }
      }
    );
  } else {
    checkCredential(mode, user, credential, cmd.type);
  }
};
