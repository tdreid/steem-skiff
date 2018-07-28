#!/usr/bin/env node

const current_version = require('./package.json').version;
const sak = require('commander');

sak
  .command('check <mode> <user> [credential]')
  .option(
    '-t, --type <type>',
    'Type of wif',
    /^(posting|active|owner)$/i,
    'posting'
  )
  .description('Check if a credential is legit')
  .action(require('./check'));

sak.version(current_version, '-v, --version').parse(process.argv);

if (sak.args.length === 0) sak.help();
