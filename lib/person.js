var EventEmitter = require('events').EventEmitter;
var util = require('util');
var emitter = new EventEmitter();

var Person = function (name){
    this.name = name;
}
util.inherits(Person, EventEmitter);

module.exports = Person;