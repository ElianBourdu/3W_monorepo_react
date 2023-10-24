const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "localisation": String
  });
  module.exports = mongoose.model('agriculteur', schema);