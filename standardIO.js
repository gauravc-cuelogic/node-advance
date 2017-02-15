var question = [
    "what is your name?",
    "what are your hobbies?",
    "where do you work?"
];

var answer = [];

function ask (i){
    process.stdout.write(`${question[i]}   >  `);
};

process.stdin.on('data', function (data){
    answer.push(data.toString().trim());

    if(answer.length < question.length){
        process.stdout.write(`${question[answer.length]}   >  `);      
    }
    else {
        process.exit();
    } 
});

process.on('exit', function (){
    process.stdout.write('\n\n\n\n');
    process.stdout.write(`Go ${answer[1]} ${answer[0]} you can go ${answer[2]} later`);
    process.stdout.write('\n\n\n\n');
});
ask (0);