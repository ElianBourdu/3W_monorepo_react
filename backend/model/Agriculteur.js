const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "localisation": String,
    "email": { type: String, unique: true, required: true },
    "password": { type: String, required: true },
    "fruits": [String]
    
  });
  module.exports = mongoose.model('agriculteur', schema);