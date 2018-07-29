#!/usr/bin/env node

const current_version = require('./package.json').version;
const skiff = require('commander');

skiff
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

skiff
  .command('get-posts <tag> <limit> [properties...]')
  .alias('gp')
  .description('Gets the most recent <limit> posts for <tag>')
  .option('-s, --space <space>', 'passed as [space] to JSON.stringify()', null)
  .option('-k, --skip-transform', 'bypass JSON.stringify()')
  .option('-c, --csv', 'output as comma separated values')
  .action(require('./getPosts'));

skiff
  .command('list-post-properties [limit]')
  .alias('lpp')
  .description(
    'List properties based on [limit] recent posts'
  )
  .action(require('./listPostProperties'));

skiff.version(current_version, '-v, --version').parse(process.argv);

if (skiff.args.length === 0) skiff.help();
