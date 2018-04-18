//This will contain message related routes.  So sub-routes or child routes like '/messages/settings' or something.
var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', function(req, res, next) {
    res.render('index');
});

module.exports = router;
