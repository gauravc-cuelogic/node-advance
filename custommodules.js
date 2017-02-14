var Person = require('./lib/person.js');

var myName = new Person('Gaurav Chauriya')

myName.on('speak', function(thoughts){
    console.log(`${myName.name} is saying ${thoughts}`)
});

myName.emit('speak',"It's a bright sunny day, as always...");   