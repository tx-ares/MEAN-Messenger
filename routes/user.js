//This will contain user related routes.  So sub-routes or child routes like '/user/profile' or something.
var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs'); // This is our hash encryption package. It can be used to secure data like a password.

var User = require('../models/user');

router.post('/', function(req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 10), // Data like a password NEEDS to be encrypted.  Also sending it over SSL is a good way to address this security issue.
        email: req.body.email
    });
    user.save(function(err, result){
        if (err) { // Error handler
            return res.status(500).json({
                title: 'The was an error creating a User.',
                error: err
            });
        }
        res.status(201).json({
            message: 'User create: SUCCESS',
            obj: result
        });
    });
});

router.post('/signin', function(req, res, next) { // Signin route
    User.findOne({email: req.body.email, function(err, user) {
        if (err) { // Error handler
            return res.status(500).json({
                title: 'The was an error creating a User.',
                error: err
            });
        }
    }}); //Express command to 'find one' entry in the database.  We will pass in my email that is in my req.body
});

module.exports = router;
