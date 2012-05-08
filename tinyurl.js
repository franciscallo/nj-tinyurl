
var url = require('url');
var http = require('http');

var TinyUrl = {

  shorten: function(url, cb) {
    
    // The request should look like http://tinyurl.com/api-create.php?url=http://google.com/  
    var options = {
      host: 'tinyurl.com',
      port: 80,
      path: '/api-create.php?url=' + url,
      method: 'GET'
    };

    var req = http.request(options, function(res) {
      var body = [];
      res.setEncoding('utf8');

      res.on('data', function(chunk) {
        body.push(chunk);
      });

      res.on('end', function() {
        var url = body.join('').trim();
        cb(null, url);
      });

      res.on('error', function(e) {
        cb(e);
      });

    });

    req.end();
    
  }
}

module.exports = TinyUrl;

