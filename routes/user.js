//This will contain user related routes.  So sub-routes or child routes like '/user/profile' or something.
var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs'); // This is our hash encryption package. It can be used to secure data like a password.
var jwt = require('jsonwebtoken'); // The JSON Web Token package will be used in creating tokens for auth sessions.

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
        if (!user) { //If the user doesn't exist OR the password is incorrect say this...
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {// The same package used to encrypt can also 'decrypt' the password and compare to the one entered in the field.
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        var token = jwt.sign({user: user} , 'secretkey', {expiresIn: 7200}); // With this method , we can create a token for the authorized session, by passing in the 'user' object we got from the db, a 'secret' string, and the expiration timer.  7200 seconds is 2 hours.
        res.status(200).json({
            message: 'Login: SUCCESS',
            token: token,
            userId: user._id
        });
    }}); //Express command to 'find one' entry in the database.  We will pass in my email that is in my req.body
});

module.exports = router;
