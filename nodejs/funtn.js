//normal functio ssatmt

 var stuff=require('./stuff');
 
console.log(stuff.counter(['digu','sonu','amit']));


console.log(stuff.add(3,5));

console.log(stuff.add(stuff.pi,3));


function sayhi(){
    console.log("hiii")
}

sayhi();

//function experion

var saybye=function(){
    console.log('bye')
}

saybye();

//node event generated.

var events=require("events")

 var myEmitter=new events.EventEmitter()
 
myEmitter.on('someevent',function(msg){
    console.log(msg);
});

myEmitter.emit('someevent','event was emitted');

///



