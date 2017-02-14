'use strict';

var Promise = require("bluebird");
const UserModel = Promise.promisifyAll(require('../database/models/user.js'));
var User = {};

User.register = function(payload) {
  return new Promise(function(resolve, reject){
    UserModel.registerUser(payload)
    .then(function(response){
      console.log("ctrl resp", response);
      resolve(response);
    })
    .catch(function(e){
      console.log("ctrl error", e);
      reject(e);
    });
  });
};


User.login = function(payload) {
  console.log(payload);
  return new Promise(function(resolve, reject){
    UserModel.loginUser(payload)
    .then(function(response){
      console.log("ctrl resp", response);
      resolve(response);
    })
    .catch(function(e){
      console.log("ctrl error", e);
      reject(e);
    });
  });
};

module.exports = User;