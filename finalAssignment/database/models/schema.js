'use strict';

const MongooseConn = require('../config.js');
const Schema = MongooseConn.Schema;

// Schema for collection users
var UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String},
    created_on: {type: Date, default: Date()},
    updated_on: {type: Date}
});

// Schema for collection userActivity
var userActivitySchema = new Schema({
    user_name: {type: String, unique: true, required: true},
    IP: {type: Array, required: true},
    user_agent: {type: String, required: true},
    created_on: {type: Date, default: Date()},
});

var Collection = {};
Collection.User = MongooseConn.model('user', UserSchema);
Collection.userActivity = MongooseConn.model('user_activity', userActivitySchema);

module.exports = Collection;

