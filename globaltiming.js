var waitTime = 3000; //3 seconds
var currentTime=  0;
var waitInterval = 100;// half second

function waitPercentage (curTime){
    var p = Math.floor((curTime/waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting... ${p}%`)
}

var interval = setInterval(function () {
    currentTime += waitInterval;
    waitPercentage(currentTime);
},waitInterval);



setTimeout(function (){
    waitPercentage(waitTime);
    console.log('\nwaiting finish!!');
    clearInterval(interval);
},waitTime);