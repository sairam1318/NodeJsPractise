var http = require('http');
var fs = require('fs');

const server = http.createServer((req, res)=>{
    fs.readFile('index.html', (err, data)=> {
        if(err){
            res.write("..................>")
            res.end("sorry")
        }else{
            
            res.end(data);
        }
    })  
})
server.listen(8080,  ()=>{
    console.log("8080 on port")
});