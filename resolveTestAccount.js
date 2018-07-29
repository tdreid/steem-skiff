const request = require('request');

module.exports = (user, password) => {
  request.post(
    'https://testnet.steem.vc/create',
    { json: { username: user, password: password } },
    (err, response, body) => {
      if (!err && response.statusCode == 200) {
        console.log(`${response.body} http://condenser.steem.vc/@${user}`);
      } else {
        console.log(body);
      }
    }
  );
};
