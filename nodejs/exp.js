var express=require('express');

var app=express();

app.get('/',function(req,res){
   res.send("this is haaamoe page") 
   res.send(function(err){
      console.log(err); 
   });
});

app.get('/contact',function(req,res){
   res.send("this is Contact page") 
});


app.get('/profile/:id',function(req,res){
   res.send("this is Contact page") 
});

app.listen(process.env.PORT,process.env.IP);
