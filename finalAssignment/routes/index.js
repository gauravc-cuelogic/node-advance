'use strict';

var express = require('express');
var passport = require('passport');
var router = express.Router();
var UserController = require('../controller/userController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res, next) {
  UserController.register(req.body).then(function(response){
      console.log("route resp",response);
      res.json(response);
  })
  .catch(function(error){
    console.log("route error",error);
    res.json(error);
  });
  
});

router.post('/login',
   passport.authenticate('local'),
  function(req, res, next) {
    UserController.login(req.body).then(function(response){
      console.log("route resp",response);
      res.json(response);
    })
    .catch(function(error){
      console.log("route error",error);
      res.json(error);
    });
  });

module.exports = router;
