//Here will contain user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema; // A Schema is a blueprint for our model. The Schema constructor will allow us to create new instances of a message schema. It will contain all the keys and values that will be needed for a message object.
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {
        type: String,
        required: true
    }, //The keys here for 'type' and 'required' are setting rules for this model.  They must be strings, and it cannot be blank.
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, //This key has an additional 'unique' key.  It means that no other emails can match its string value.  The 'unique' key's functionality is added by additional package called 'unique-validator'
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }] //This key is an array to contain multiple messages.
});

schema.plugin(mongooseUniqueValidator); //After importing the validator plugin we can 'call' it on our schema by using the .plugin method and passing in our imported validator.

module.exports = mongoose.model('User', schema); //This will export a model called Users and will generate a collection automatically if it is the first of its kind.
