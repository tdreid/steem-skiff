#!/usr/bin/env node

const current_version = require('./package.json').version;
const sak = require('commander');

sak
  .command('login <user> [password]')
  .description('Check if a user/password pair is legit')
  .action(require('./login'));

sak.version(current_version, '-v, --version').parse(process.argv);
