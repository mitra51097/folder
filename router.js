const express = require('express');
const app = express();
const router = express.Router();

// router.route('/about').get(function(req, res, next){
//     console.log("GET request called");
//     res.end();
// })

// router.route('/find').post(function(req, res, next){
//     console.log("POST request called");
//     res.end();
// })
router.get('/about', function(req, res, next){
    console.log("GET request called");
    res.end();
})

router.route('/find').post(function(req, res, next){
    console.log("POST request called");
    res.end();
})
app.use(router);
app.listen(4000, function (err){
    if (err) console.log("error");
    console.log("server on 4000")
})