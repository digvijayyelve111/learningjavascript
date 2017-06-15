var https=require('http');
var fs=require('fs');


var myReadStream=fs.createReadStream(__dirname +'/readme.txt','utf8');
var myWriteStream=fs.createWriteStream(__dirname +'/writeme.txt');

/*
myReadStream.on('data',function(chunk){
    console.log('new chunk');
    myWriteStream.write(chunk);
});
*/

//myReadStream.pipe(myWriteStream);



var server=https.createServer(function(req, res){
    
    res.writeHead(200,{'Content-Type':'text/plain'});
    myReadStream.pipe(res);
    
});


server.listen(process.env.PORT,process.env.IP);
