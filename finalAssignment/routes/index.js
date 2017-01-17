'use strict';

var express = require('express');
var router = express.Router();
var UserController = require('../controller/userController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res, next) {
  var response = UserController.register(req.body).then(function(response){
      console.log("route resp",response);
      res.json(response);
  })
  .catch(function(error){
    console.log("route error",error);
    res.json(error);
  });
  
});

module.exports = router;
