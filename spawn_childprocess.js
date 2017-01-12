var spawn = require('child_process').spawn;

var chldprcs = spawn('node',['samplefile']);

chldprcs.stdout.on('data',function (data){
    console.log(data.toString());
});

chldprcs.on('close', function(){
    console.log('process ends');
    process.exit();
});

setTimeout(function(){
    chldprcs.stdin.write('stop');
},4000);

