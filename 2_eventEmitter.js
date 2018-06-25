var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
  };

util.inherits(Person, events.EventEmitter);

var lakshay = new Person("lakshay");
var macOS = new Person("macOS");
var people = [lakshay, macOS];

people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(person.name + " says: " + msg);
  });
});

lakshay.emit('speak', "hi all!!");
macOS.emit('speak', "hello there....");
