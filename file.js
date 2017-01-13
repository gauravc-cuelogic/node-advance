var fs = require('fs');

// Synchronous way, this methods reads the file synchronouly which blocks the node thread for this call and stops other request to get execute
var readlist = fs.readdirSync('./node_modules/long-timeout');
console.log(readlist);

// Async file read
fs.readdir('./node_modules/long-timeout', function (err, files){
    if(err) throw err;
    console.log(files);
});
console.log('reading files');

//reading file content syncronously
var readContent = fs.readFileSync('README.md','UTF-8');
console.log(readContent);// pass UTF-8 as second param or convert content toString
 
//reading content async
fs.readFile('README.md', function(err, content){
        console.log(content.toString());
});