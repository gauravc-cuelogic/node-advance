'use strict';

var Promise = require("bluebird");

//Promisify Mongoose object
const Mongoose = Promise.promisifyAll(require("mongoose"));

Mongoose.connect(`mongodb://localhost/node_assignment`)
.then(function(response){// callback replaced by then
  return null;
})
.catch(function(error){
  Config.error("Error in database connection") ; 
  throw err;
});

var Schema = Mongoose.Schema;

// Schema for collection users
var UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String},
    created_on: {type: Date, default: Date()},
    updated_on: {type: Date}
});

var User = Mongoose.model('user', UserSchema);


var searchUser = function() {

  return new Promise(function(resolve, reject){
    
    User.findOne({"username":"gchauriya"})
    .then(function(response) {
      resolve(response);
    })
    .catch(function(error) {
      reject(error);
    });

  });
};

searchUser()
.then(function (response){
    console.log('success resp',response);
    process.exit();
})
.error(function(err){
    console.log('err occured',err);
    process.exit();
});