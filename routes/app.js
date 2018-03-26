//Request types: GET, POST, PATCH, PUT, DELETE, and more.

// GET: Get a resource.
// POST: Create a resource.
// Patch: Update a resource.
// Put: Replace a resource.
// Delete: You guessed it... Delete a resource.

var express = require('express');
var router = express.Router();
var User = require('../models/user'); //Import the User model

router.get('/', function (req, res, next) {
    res.render('node');
});

// router.get('/message', function (req, res, next) { // A GET route will consume some data from a source after making a request.
//     res.render('node', {message: req.params.msg}); // With each of the routes, we can pass data as objects as our 2nd argument.  We can access the URL variable set above by accessing the params followed by the name of the URL variable.
// });

router.post('/', function (req, res, next) {
    // var message = req.body.message; // By accessing our request, we can access the body which contains the bulk of our data and we will assume there is an attribute named 'message'
    var email = req.body.email;
    var user = new User({
      firstName: 'Genji',
      lastName: 'Shimada',
      password: 'ryugekkan',
      email: email // 'email' Variable declared above.
    });
    user.save(function(err, result) { //This tells mongoose to save this object in our database.
      if(err) { // Error handler
        alert(err);
      }

      else {
        console.log("Message object saved: " + result);
      }
    });
    res.redirect('/');
});

module.exports = router;
