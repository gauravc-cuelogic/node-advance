var path = require('path');
var util = require('util');
var v8 = require('v8');

console.log(path.basename(__dirname));
console.log(path.basename(__filename));

util.log(path.basename(__dirname));

var uploadDir = path.join(__dirname, 'www', 'files', 'upload');

util.log(uploadDir);
util.log(v8.getHeapStatistics());