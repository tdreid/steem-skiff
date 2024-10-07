# steem-skiff ([THIS PROJECT HAS BEEN ARCHIVED](https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories))
__Steem blockchain utility CLI__

## Install

```
npm i -g https://github.com/tdreid/steem-skiff

```

## Use

```
  Usage: skiff [options] [command]

  Options:

    -v, --version                                         output the version number
    -h, --help                                            output usage information

  Commands:

    check|ck [options] <mode> <user> [credential]         Check if a credential is legit
    get-posts|gp [options] <tag> <limit> [properties...]  Gets the most recent <limit> posts for <tag>
    get-key|gk [options] <user> [password]                Gets a key given user's password
    list-post-properties|lpp [limit]                      List properties based on [limit] recent posts
    make-test-account|mta <user> [password]               Make a test account on https://testnet.steem.vc
```    
    
### check

```
  Usage: check|ck [options] <mode> <user> [credential]

  Check if a credential is legit

  Options:

    -t, --type <type>  type of wif; can be posting, active, or owner. (default: posting)
    -h, --help         output usage information

  Remarks:
       
  <mode> can be either password or wif
```

### get-posts    

```
  Usage: get-posts|gp [options] <tag> <limit> [properties...]

  Gets the most recent <limit> posts for <tag>

  Options:

    -f, --format <format>  specify output as plain, stringified, or csv (default: plain)
    -s, --space <space>    passed as [space] to JSON.stringify() (default: null)
    -h, --help             output usage information
```

### get-key

```
  Usage: get-key|gk [options] <user> [password]

  Gets a key given user's password

  Options:

    -t, type <type>  type of key; can be posting, active, or owner (default: posting)
    -h, --help       output usage information
```

### list-post-properties

```
  Usage: list-post-properties|lpp [options] [limit]

  List properties based on [limit] recent posts

  Options:

    -h, --help  output usage information
```

### make-test-account

```
  Usage: make-test-account|mta [options] <user> [password]

  Make a test account on https://testnet.steem.vc

  Options:

    -h, --help  output usage information
```

## License

MIT License

Copyright (c) 2018 Trevor Reid

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
