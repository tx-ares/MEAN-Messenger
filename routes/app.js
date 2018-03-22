//Request types: GET, POST, PATCH, PUT, DELETE, and more.

// GET: Get a resource.
// POST: Create a resource.
// Patch: Update a resource.
// Put: Replace a resource.
// Delete: You guessed it... Delete a resource.

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/message/:msg', function (req, res, next) { // A GET route will consume some data from a source after making a request.
    res.render('node', {message: req.params.msg}); // With each of the routes, we can pass data as objects as our 2nd argument.  We can access the URL variable set above by accessing the params followed by the name of the URL variable.
});

router.post('/message', function (req, res, next) {
    var message = req.body.message; // By accessing our request, we can access the body which contains the bulk of our data and we will assume there is an attribute named 'message'
    res.redirect('/message/' + message); //
});

module.exports = router;
