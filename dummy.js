
const { urlencoded } = require('body-parser');
const express = require('express')
const app = express();
const router = express.Router();
let { people } = require('./data')
//allows the middleware to all the routes
app.use(express.static('./staticFiles'))
//in order to get the form data(parse
express.use(express.urlencoded ({extended : false}))
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people})
})
app.listen(7499, () => {
    console.log('Server on port 7499')
})
// const express = require('express');
// const EventEmitter = require('events');
// //to create an eventEmitter we need create an instance of eventemitter
// const eventEmitter = new EventEmitter();
// const app = express();
// //listen to the event
// //at the time of publishing the event there has to be a registerd listener
// eventEmitter.on('myevent',(id)=>{
//     var temp=10;
//     // console.log(b);
//     // console.log(id);
//     console.log("your % is" +" "+ temp*id);
//     console.log("Data Received");
// });

// app.get('/info/:id', (req, res) => {
//     var { id } = req.params;
//     console.log('ID is'+" "+id );
//     eventEmitter.emit('myevent', id);
//     return id;
// })
// app.listen(7499, () => {
//     console.log('server on 7499');
// })
