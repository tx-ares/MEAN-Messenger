var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/message', function (req, res, next) {
    res.render('node', {message: "Yoyo!"}); // With each of the routes, we can pass data as objects as our 2nd argument. 
});

module.exports = router;
