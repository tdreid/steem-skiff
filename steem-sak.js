#!/usr/bin/env node

const current_version = require('./package.json').version;
const sak = require('commander');

sak
  .command('check <mode> <user> [credential]')
  .option(
    '-t, --type <type>',
    'Type of wif; can be posting, active, or owner.',
    /^(posting|active|owner)$/i,
    'posting'
  )
  .description('Check if a credential is legit')
  .action(require('./check'));

sak
  .command('get-posts <tag> <limit> [properties...]')
  .description('Gets the most recent <limit> posts for <tag>')
  .option('-s, --space <space>', 'Passed as [space] to JSON.stringify()', null)
  .option('-k, --skip-transform', 'Bypass JSON.stringify()')
  .action(require('./getPosts'));

sak
  .command('list-post-properties [limit]')
  .description(
    'See a list of available properties based on [limit] recent posts'
  )
  .alias('lpp')
  .action(require('./listPostProperties'));

sak.version(current_version, '-v, --version').parse(process.argv);

if (sak.args.length === 0) sak.help();
