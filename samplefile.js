var messages = [
    "sample text 1",
    "sample text 2",
    "sample text 3",
    "sample text 4"
    ];

var interval = setInterval(function(){
    var i = Math.floor(Math.random() * messages.length);
    process.stdout.write(`${messages[i]}\n`);
},1000);

process.stdin.on('data', function (data){
    process.stdout.write(`STDOUT: ${data} `);
    clearInterval(interval);
    process.exit();
});