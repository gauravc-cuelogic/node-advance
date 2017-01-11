

hello = "Hello Gaurav"; // variable declared without var gets attached to global
global.console.log(`${global.hello}, Good Morning!!`); //template string
var hi = "Hi Gaurav"; // declared variable with var is not global
console.log(`${hi}, Gaurav`);

console.log(__dirname); // this gives the directory path
console.log(__filename);// this gives directory path with file name

var path = require('path');

console.log(path.basename(__filename)); // this gives the filename without path
console.log(path.basename(__dirname));// this gives parent folder name withour path