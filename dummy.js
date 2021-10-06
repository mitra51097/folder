const express = require('express');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
const app = express();

eventEmitter.on('myevent',(id)=>{
    var b=8;
    console.log(b);
    console.log(b*id);
    console.log("Data Received");
    //console.log("Data Received"+{$a});
});

app.get('/info/:id', (req, res) => {
    var { id } = req.params;
    console.log('ID is'+id );
    //var a=id;
    eventEmitter.emit('myevent', id);
    return id;
})
app.listen(7499, () => {
    console.log('server on 7499');
})