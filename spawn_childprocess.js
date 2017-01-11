var spawn = require('child_process').spawn;

var sp = spawn("node", ["event_handiling"]);

sp.stdout.on('data',function(data){
	console.log(`STDOUT: ${data} `);
});

sp.on('close', function (){
	console.log('child ended');
	process.exit();
});
