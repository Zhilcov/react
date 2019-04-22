"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrtypt = require('bcryptjs');

const UsersSchema = new Schema({
    username: {type: String},
    password: {type: String},
    addedAt: {type: Date, default: Date.now},
    isAdmin : {type:Boolean , default: false},
    lastPasswordChange:{type:Date, default:"0999-12-31T21:00:00.000+00:00"}
}, {
    versionKey: false,
    collection: "UsersCollection"
});

UsersSchema.pre('save', function(next) {
    if(this.isModified('password') || this.isNew()) this.password = bcrtypt.hashSync(this.password, 12);
    next();
});

module.exports = mongoose.model('UsersModel', UsersSchema);