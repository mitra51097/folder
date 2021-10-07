const express = require('express');
const EventEmitter = require('events');
//to create an eventEmitter we need create an instance of eventemitter
const eventEmitter = new EventEmitter();
const app = express();
//listen to the event
//at the time of publishing the event there has to be a registerd listener
eventEmitter.on('myevent',(id)=>{
    var temp=10;
    // console.log(b);
    // console.log(id);
    console.log("your % is" +" "+ temp*id);
    console.log("Data Received");
    //console.log("Data Received"+{$a});
});

app.get('/info/:id', (req, res) => {
    var { id } = req.params;
    console.log('ID is'+" "+id );
    //var a=id;
    eventEmitter.emit('myevent', id);
    return id;
})
app.listen(7499, () => {
    console.log('server on 7499');
})


// const EventEmitter = require('events');
// const express = require('express');
// const app = express(); 
// /to create an eventEmitter we need create an instanceofeventemitter/
// const eventEmitter = new EventEmitter();
// //parse form data
// app.use(express.urlencoded({ extended: false }))
// app.use(express.json())

// //listen to the event
// //at the time of publishing the event there has to be a registerd listener
// eventEmitter.on('myevent',(a)=>{
//     //a=a+2;
//     var b=8;
//     console.log(b);
//     console.log(a);
//     console.log("Data Received");
//     //console.log("Data Received"+{$a});
// });
// //publish an event
// // const myevent = function(){
// //     var a = 4;
// //     return a;
// // };
// var a = app.get('/info/:id', (req, res) => {
//     var { id } = req.params;
//     console.log('ID is'+id );
//     //a=id;
//     return id;
// })

// //var a = req.url.id;
// eventEmitter.emit('myevent', 'a');

// app.listen(9000,() => {
//     console.log('server on 9000');
// })



