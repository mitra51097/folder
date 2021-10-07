const http = require('http');
//create a server obj
http.createServer(function(req, res){

    //http header
    res.write(200,{'Content-type':'text/html'});

    var url = req.url;

    if(url==='/about') {
        res.write('you are in about..!');
        res.end();
    }
    else if(url==='/index') {
        res.write('you are in index..!');
        res.end();
    }
    else{
        res.write('hi......!');
        res.end();
    }
}).listen(3000, function(){
    console.log("server in 3000");
});
// server.listen(3000, ()=>{
//     console.log("server in 3000");
// });