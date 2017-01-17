'use strict';

require('dotenv').config();
const DataBaseSchema = require('./schema.js');
const User = DataBaseSchema.User;
const Promise = require('bluebird');
const bcrypt = require('bcrypt');
var saltRound = parseInt(process.env.SALT_ROUND);

var UserModel = {};

UserModel.registerUser = function(payload) {

  return new Promise(function (resolve, reject){
    var NewUser = new User() ;
    NewUser.username = payload.username;
    NewUser.first_name = payload.first_name;
    NewUser.last_name = payload.last_name;
    encryptPassword(payload.password)
    .then(function(encryptedPassword) {
      NewUser.password = encryptedPassword;
      NewUser.save()
      .then(function(response) {
        resolve(response);
        console.log("model resp", response);
      })
      .catch(function(error) {
        console.log("model error", error);
        reject(error);
      });
    })
    .catch(function(error) {
      reject(error);
      console.log("model error", error);
    });
  });
};

var encryptPassword = function(plainPassword) {
  
  return new Promise(function(resolve, reject) {
    bcrypt.hash(plainPassword, saltRound)
    .then(function(hash) {
        resolve(hash);
    })
    .catch(function(error) {
        console.log('Unable to encrypt password', error);
        reject(error);
    });
  });
};

module.exports = UserModel;