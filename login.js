const prompt = require('prompt');

module.exports = (user, pw) => {
  const checkLogin = (check_user, check_pw) =>
    console.log(`${check_user}, ${check_pw}`);

  if (!pw) {
    prompt.start();
    prompt.get(['pw'], (err, result) => {
      if (!err) {
        checkLogin(user, result.pw);
      } else {
        console.error(err);
        process.exit(1);
      }
    });
  } else {
    checkLogin(user, pw);
  }
};
