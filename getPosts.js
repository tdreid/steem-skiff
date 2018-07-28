const steem = require('steem');

module.exports = (tag, limit, properties, cmd) => {
  steem.api.getDiscussionsByCreated({ tag, limit }, (err, result) => {
    if (!err) {
      if (!cmd.skipTransform) {
        const isInteger = require('lodash/isInteger');
        console.log(
          JSON.stringify(
            result,
            properties.length > 0 ? properties : null,
            isInteger(Number(cmd.space)) ? Number(cmd.space) : cmd.space
          )
        );
      } else {
        const pick = require('lodash/pick');
        result = result.map(post => pick(post, properties));
        console.log(result);
      }
    } else {
      console.error(err);
      process.exit(5);
    }
  });
};
