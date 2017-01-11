var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = {
    name: '',
    sayings: []
};

rl.question('what is your name? ', function (answer){
    realPerson.name = answer;
    rl.setPrompt(`So your name is ${realPerson.name}? `);
    rl.prompt();
    rl.on('line', function (sayings){

        if(sayings.trim() === 'exit'){
            rl.close();
        }else{
            realPerson.sayings.push(sayings);
            rl.setPrompt(`Tell me more about you ${realPerson.name}.. (type 'exit' to close)`);
            rl.prompt();
        }
    });
});

rl.on('close', function (){
    console.log(" %s says %j", realPerson.name, realPerson.sayings);
    process.exit();
});