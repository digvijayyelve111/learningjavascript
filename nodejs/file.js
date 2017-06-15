var fs=require('fs');


//var readme=fs.readFileSync('readme.txt','utf8');

fs.readFile('readme.txt','utf8',function(err, data){
    console.log(data);
});
//console.log(readme);


//fs.writeFileSync('writeme.txt',readme,'utf8');
