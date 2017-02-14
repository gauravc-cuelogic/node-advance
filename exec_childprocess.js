var exec = require('child_process').exec;

exec('node -v', function (err, stdout){
    if(err){
        console.log(err);
    }
    else{
        console.log(stdout);
    }
});