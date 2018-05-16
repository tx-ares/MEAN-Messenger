//Here will contain message model
var mongoose = require('mongoose');
var Schema = mongoose.Schema; // A Schema is a blueprint for our model. The Schema constructor will allow us to create new instances of a message schema. It will contain all the keys and values that will be needed for a message object.

var User = require('./user');

var schema = new Schema({
  content: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref:'User'} //The 'ref' key will "connect" our messages to our users.  The user schema will also have a 'ref' referencing the messages.
});

schema.post('remove', function(message) {
    User.findById(message.user, function(err, user) {
        user.messages.pull(message);
        user.save();
    });
});

module.exports = mongoose.model('Message' , schema); //This will export a model called Message by passing in the name of the Model and its schema then will generate a collection automatically if it is the first of its kind.
