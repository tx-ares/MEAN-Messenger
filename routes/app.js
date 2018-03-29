//Request types: GET, POST, PATCH, PUT, DELETE, and more.

// GET: Get a resource.
// POST: Create a resource.
// Patch: Update a resource.
// Put: Replace a resource.
// Delete: You guessed it... Delete a resource.

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
      res.render('index'); // Now setting up Angular 5 to become our index,  it being a SPA , it will only use this file to display our views and change / re-render using other views.
    });
});

module.exports = router;
