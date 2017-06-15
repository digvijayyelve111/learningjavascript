var events=require("events");

var util=require("util");

var person=function(name){
    this.name=name;
};

util.inherits(person,events.EventEmitter);

var james0=new person('james0');
var james1=new person('james1');
var james2=new person('james2');


var person=[james0,james1,james2];





