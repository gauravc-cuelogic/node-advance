'use strict';

const Schema = require('./schema.js');
var User = Schema.User;
var UserActivity = Schema.userActivity;
const Promise = require('bluebird');
var common = require('../../public/javascripts/common');

var UserModel = {};

UserModel.registerUser = function(payload) {
  return new Promise(function (resolve, reject){
    var NewUser = new User() ;
    NewUser.username = payload.username;
    NewUser.first_name = payload.first_name;
    NewUser.last_name = payload.last_name;
    common.encryptPassword(payload.password)
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

UserModel.loginUser = function(payload) {

  return new Promise(function (resolve, reject){
    UserModel.searchUser({"username" : payload.username})
    .then(function (userResult) {
      console.log(userResult,'userResult');
      common.decryptPassword(payload.password, userResult.password)
      .then(function(encryptedPassword) {
        resolve(encryptedPassword);
      })
      .catch(function(e){
        console.log('Invalid password');
        reject(e);
      })
    })
    .catch(function(error) {
      console.log('Invalid Username');
      reject(error);
    });
  });
};

UserModel.searchUser = function(query, fields) {

  return new Promise(function(resolve, reject){
    if(query instanceof Array){
        var condition = {$or: query};
    }
    else {
        var condition = query;
    }
    User.findOne(condition, fields)
    .then(function(response) {
      resolve(response);
    })
    .catch(function(error) {
      reject(error);
    });
  });
};

module.exports = UserModel;