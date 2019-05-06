//RealEstate.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema
var RealEstate = new Schema({
  desc: {
    type: String
  },

},{
    collection: 'Tasks'
});

module.exports = mongoose.model('RealEstate', RealEstate);