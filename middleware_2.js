const express = require('express')
const app = express();
const router = express.Router()
//middleware without mount path
router.use(function(req, res, next){
    console.log("you are in default page");
})
router.get('/about', function(req, res, next){
    console.log("GET request called");
    res.end();
})

router.route('/find').post(function(req, res, next){
    console.log("POST request called");
    res.end();
})
app.use(router);
app.listen(7499, (err) => {
    if(err) console.log("error");
    console.log('server on 7499');
})