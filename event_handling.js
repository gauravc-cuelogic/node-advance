var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('customevent',function(message, status){
    process.stdout.write(`${status} : ${message}\n`);

});

emitter.emit('customevent',"I'am Gaurav", 201);

var util = require('util');

var Person = function (name){
    this.name = name;
}


util.inherits(Person, EventEmitter);

var myName = new Person('Gaurav Chauriya')

myName.on('speak', function(thoughts){
    console.log(`${myName.name} is saying ${thoughts}`)
});

myName.emit('speak',"It's a bright sunny day, as always...");   