'use strict';

require('dotenv').config();
var Promise = require("bluebird");
const Mongoose = Promise.promisifyAll(require("mongoose"));

Mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`)
.then(function(response){
  return null;
})
.catch(function(error){
  Config.error("Error in database connection") ; 
  throw err;
});

module.exports = Mongoose;