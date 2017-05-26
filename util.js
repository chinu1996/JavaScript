var util = require('util');

var name = 'Priyansh';
var greeting = util.format('Hello, %s', name); //%s is to pass the value that can be provided after ending the quotes and comma
util.log(greeting);