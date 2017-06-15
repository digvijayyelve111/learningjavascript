
var time=0;

console.log(__dirname);
console.log(__filename)

var timer=setInterval(function(){
    time +=2;
    console.log(time+'3 secon have passd')
    if (time>5){
        clearInterval(timer);
    }
},2000);

