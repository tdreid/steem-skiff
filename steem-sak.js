#!/usr/bin/env node

const current_version = require('./package.json').version;
const sak = require('commander');

sak
  .command('check <mode> <user> [credential]')
  .alias('ck')
  .option(
    '-t, --type <type>',
    'type of wif; can be posting, active, or owner.',
    /^(posting|active|owner)$/i,
    'posting'
  )
  .description('Check if a credential is legit')
  .action(require('./check'));

sak
  .command('get-posts <tag> <limit> [properties...]')
  .alias('gp')
  .description('Gets the most recent <limit> posts for <tag>')
  .option('-s, --space <space>', 'passed as [space] to JSON.stringify()', null)
  .option('-k, --skip-transform', 'bypass JSON.stringify()')
  .option('-c, --csv', 'output as comma separated values')
  .action(require('./getPosts'));

sak
  .command('list-post-properties [limit]')
  .alias('lpp')
  .description(
    'See a list of available properties based on [limit] recent posts'
  )
  .action(require('./listPostProperties'));

sak.version(current_version, '-v, --version').parse(process.argv);

if (sak.args.length === 0) sak.help();
