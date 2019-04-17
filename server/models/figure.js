"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FigureSchema = new Schema({
    sides :  {type: Array},
    value : {type:Number},
    id : {type:Number},
    label: {type:String},
    recycle: {type:Boolean}
}, {
    versionKey: false,
    collection: "figures"
});

module.exports = mongoose.model('FigureSchema', FigureSchema);