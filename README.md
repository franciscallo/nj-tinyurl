## nj-tinyurl

tinyurl.com API in node.js

## Installation

`npm install nj-tinyurl`

## Example
```js
var TinyUrl = require('nj-tinyurl');
var shortenUrl = TinyUrl.shorten('http://www.google.com', function(err, url) {
  console.log(url)
});

```

## License
MIT

