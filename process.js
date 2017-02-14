//console.log(process.argv); //process variable which can be accessed any where

function processinfo(flag){
    var index = process.argv.indexOf(flag);
    if(index === -1){
        return null;
    }
    else {
        return process.argv[index+1]
    }
}
var user = processinfo('--user');
var comp = processinfo('--comp');
if(!user || !comp){
    console.log('Invalid credentials');
}
else{
    console.log(`user name : ${user} and company : ${comp}`);
}
