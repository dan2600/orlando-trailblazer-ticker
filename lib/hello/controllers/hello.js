var exports = module.exports;

var greeter   = require('../models/greeter');

exports.sayHello = function(req, res) {

res.type('text/xml');
  

  res.send('<additional-entry>this can be more data</additional-entry>');

  // Just responding with a string, without any template:
  // res.status(200).send('Hello World');
};
