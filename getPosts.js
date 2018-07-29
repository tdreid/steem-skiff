const steem = require('steem');

module.exports = (tag, limit, properties, cmd) => {
  steem.api.getDiscussionsByCreated({ tag, limit }, (err, result) => {
    const pick = require('lodash/pick');
    result = result.map(post => pick(post, properties));
    if (!err) {
      if (!cmd.skipTransform) {
        const isInteger = require('lodash/isInteger');
        if (cmd.csv) {
          const csv = require('jsonexport');
          csv(result, (err, csvOutput) => {
            if (!err) {
              console.log(csvOutput);
            } else {
              console.error(err);
              process.exit(13);
            }
          });
        } else {
          const jsonString = JSON.stringify(
            result,
            null,
            isInteger(Number(cmd.space)) ? Number(cmd.space) : cmd.space
          );
          console.log(jsonString);
        }
      } else {
        console.log(result);
      }
    } else {
      console.error(err);
      process.exit(5);
    }
  });
};
