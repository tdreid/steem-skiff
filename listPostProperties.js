const steem = require('steem');
const keys = require('lodash/keys');
const assign = require('lodash/assign');

module.exports = (limit = 1) => {
  steem.api.getDiscussionsByCreated(
    { tag: '', limit: Number(limit) || 1 },
    (err, response) => {
      if (!err) {
        if (response.length > 0) {
          let exemplar = {};
          response.forEach(post => assign(exemplar, post));
          console.log(keys(exemplar).join(' '));
        } else {
          console.log('Nothing found.');
        }
      } else {
        console.log(err);
        process.exit(8);
      }
    }
  );
};
