const express = require('express')
const app = express();

//middleware with no mounted path, fun executes everytime the app receives the request.
app.use(function(req, res, next){
    console.log('Time', Date.now());
    next();
})

app.use('/user/:id', function(req, res, next){
    console.log('Request Type:', req.method);
    next();
})

app.listen(7499, (err) => {
    if(err) console.log("error");
    console.log('server on 7499');
})