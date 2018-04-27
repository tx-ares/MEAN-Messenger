//This will contain message related routes.  So sub-routes or child routes like '/messages/settings' or something.
var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/' , function(req, res, next) { //Because of redirect defined in app.router.ts I can just use '/' and I will get defaulted to /messages.
    Message.find() //mongoDb command to fetch all messages when no additional queries are in my route.
        .exec(function(err, messages) {
            if (err) { // Error handler
                return res.status(500).json({
                    title: 'Dang, it broke!',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Messages fetch: SUCCESS',
                obj: messages
            })
        })
});

router.post('/', function(req, res, next) { //I will set this as a POST request so that Angular knows to post my 'message' data to my mongoDb backend.
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err, result) {
        if (err) { // Error handler
            return res.status(500).json({
                title: 'Dang, it broke!',
                error: err
            });
        }
        res.status(201).json({ //I am setting a 'everything's ok' code for 201
            message: 'Message post: SUCCESS',
            obj: result
        });
    });
});

module.exports = router;

//'Observables' are JavaScript objects from 3rd party library used for asychronus task handling.
