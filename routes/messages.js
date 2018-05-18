//This will contain message related routes.  So sub-routes or child routes like '/messages/settings' or something.
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Message = require('../models/message');

router.get('/', function(req, res, next) { //Because of redirect defined in app.router.ts I can just use '/' and I will get defaulted to /messages.
    Message.find() //mongoDb command to fetch all messages when no additional queries are in my route.
        .populate('user', 'firstName') //Mongoose method to also get the User firstName field from the reference created in /models/message.js
        .exec(function(err, messages) {
            if (err) { // Error handler
                return res.status(500).json({
                    title: 'Dang, it broke!',
                    error: err
                });
            }
            res.status(200).json({ //Like below, a 'everything's okay' message. Can call this a 'success handler'.
                message: 'Messages fetch: SUCCESS',
                obj: messages
            });
        });
});

router.use('/', function(req, res, next) { // On each request, this route is reached.
    jwt.verify(req.query.token, 'secret', function(err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        next(); // If there is no error, meaning 'token' is valid, just allow it to continue to next step , without returning anything.
    })
});

router.post('/', function(req, res, next) { //I will set this as a POST request so that Angular knows to post my 'message' data to my mongoDb backend.
    var decoded = jwt.decode(req.query.token); // Important note: decode does NOT check for validity.  It only decodes.  Make sure to use jwt.verify() first.
    User.findById(decoded.user._id, function(err, user) {
        if (err) { // Error handler
            return res.status(500).json({
                title: 'Dang, it broke!',
                error: err
            });
        }
        var message = new Message({
            content: req.body.content,
            user: user._id
        });
        message.save(function(err, result) {
            if (err) { // Error handler
                return res.status(500).json({
                    title: 'Dang, it broke!',
                    error: err
                });
            }
            user.messages.push(result);
            user.save();
            res.status(201).json({ //I am setting a 'everything's ok' code for 201
                message: 'Message post: SUCCESS',
                obj: result
            });
        });
    });
});

router.patch('/:id', function(req, res, next) { // A 'patch' route is used to change existing data.
        var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function(err, message) {
        if (err) { // Default error handler
            return res.status(500).json({
                title: 'Dang, it broke!',
                error: err
            });
        }
        if (!message) { // If there isn't a legitimate error throw but something's still wrong, we can catch it with a custom ' error handler '. In this case, I want to throw an error if there's no message in my request.
            return res.status(500).json({
                title: 'Hmm, no message was found!',
                error: {
                    message: 'Hmm, no message in the request!'
                }
            });
        }
         if (message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {
                    message: 'Users do not match'
                }
            });
        }
        message.content = req.body.content;
        message.save(function(err, result) {
            if (err) { // Error handler
                return res.status(500).json({
                    title: 'Dang, it broke!',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Message update: SUCCESS',
                obj: result
            });
        });
    });
});

router.delete('/:id', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function(err, message) {
        if (err) { // Default error handler
            return res.status(500).json({
                title: 'Dang, it broke!',
                error: err
            });
        }
        if (!message) { // If there isn't a legitimate error throw but something's still wrong, we can catch it with a custom ' error handler '. In this case, I want to throw an error if there's no message in my request.
            return res.status(500).json({
                title: 'Hmm, no message was found!',
                error: {
                    message: 'Hmm, no message in the request!'
                }
            });
        }
        if (message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {
                    message: 'Users do not match'
                }
            });
        }
        message.remove(function(err, result) { // Very similar to patch route , except we will .remove() it instead of .save()
            if (err) { // Error handler
                return res.status(500).json({
                    title: 'Dang, it broke!',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Message delete: SUCCESS',
                obj: result
            });
        });
    });
});

module.exports = router;

//'Observables' are JavaScript objects from 3rd party library used for asychronus task handling.
