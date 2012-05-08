var TinyUrl = require('../nj-tinyurl');

module.exports = {
  'shorten url': function(test) {
    TinyUrl.shorten('http://google.com', function(error, result) {
      test.ifError(error);
      test.equal(result, 'http://tinyurl.com/2tx');
      test.done();
    });
  }

}

