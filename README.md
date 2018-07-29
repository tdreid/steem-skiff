# steem-sak
__Steem blockchain utility CLI__

Swiss Army Knife | Steem All Knowing | Etc.

## Install

```
npm i -g https://github.com/tdreid/steem-sak

```

## Use

```
  Usage: sak [options] [command]

  Options:

    -v, --version                                         output the version number
    -h, --help                                            output usage information

  Commands:

    check|ck [options] <mode> <user> [credential]         Check if a credential is legit
    get-posts|gp [options] <tag> <limit> [properties...]  Gets the most recent <limit> posts for <tag>
    list-post-properties|lpp [limit]                      See a list of available properties based on [limit] recent posts
```    
    
### check

```
  Usage: check|ck [options] <mode> <user> [credential]

  Check if a credential is legit

  Options:

    -t, --type <type>  type of wif; can be posting, active, or owner. (default: posting)
    -h, --help         output usage information
```

### get-posts    

```
  Usage: get-posts|gp [options] <tag> <limit> [properties...]

  Gets the most recent <limit> posts for <tag>

  Options:

    -s, --space <space>   passed as [space] to JSON.stringify() (default: null)
    -k, --skip-transform  bypass JSON.stringify()
    -c, --csv             output as comma separated values
    -h, --help            output usage information
```

### list-post-properties

```
  Usage: list-post-properties|lpp [options] [limit]

  See a list of available properties based on [limit] recent posts

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
