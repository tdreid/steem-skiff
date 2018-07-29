const steem = require('steem');

/** Query n recent posts from the steem blockchain, filtered and formatted
 * accordingly.
 */
module.exports = (tag, limit, properties, cmd) => {
  steem.api.getDiscussionsByCreated({ tag, limit }, (err, result) => {
    if (!err) {
      if (properties.length > 0) {
        // Mutate each object in the array. Keep only the properties of interest
        const pick = require('lodash/pick');
        result = result.map(post => pick(post, properties));
      }
      switch (cmd.format) {
        case 'plain':
          console.log(result);
          break;
        case 'csv':
          const csv = require('jsonexport');
          csv(result, (err, csvOutput) => {
            if (!err) {
              console.log(csvOutput);
            } else {
              console.error(err);
              process.exit(13);
            }
          });
          break;
        case 'stringified':
          // An integer should indent that many spaces (up to ten). Any other
          // string should be inserted as placeholder.  Make sure integers are
          // not treated as strings
          console.log(
            JSON.stringify(
              result,
              null,
              Number.isInteger(Number(cmd.space))
                ? Number(cmd.space)
                : cmd.space
            )
          );
          break;
        default:
          console.error(`${cmd.format} is not a supported format option`);
          process.exit(21);
      }
    } else {
      console.error(err);
      process.exit(5);
    }
  });
};
