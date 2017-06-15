var https=require('http');

var server=https.createServer(function(req, res){
    
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hey nonjaas');
    
});

//server.listen(3000,'172.17.0.84');

server.listen(process.env.PORT,process.env.IP);



console.log('now lisind port 3000');