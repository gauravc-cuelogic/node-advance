'use strict';

require('dotenv').config();
var bcrypt = require('bcrypt');
var Promise = require('bluebird');
var saltRound = parseInt(process.env.SALT_ROUND);

module.exports.encryptPassword = function(plainPassword) {
  
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

module.exports.decryptPassword = function(plainTextPassword, hash) {
console.log(plainTextPassword, hash, 'decrypt');
  return new Promise(function(resolve, reject) {
    bcrypt.compare(plainTextPassword, hash)
    .then(function(response) {
      resolve(response);
    })
    .catch(function(error) {
      console.log('Unable to decrypt password', error);
      reject(error);
    });
  });
};
