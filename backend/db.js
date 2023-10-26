const mongoose = require('mongoose');

const MONGODB_URL = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@atlascluster.xwnmtd8.mongodb.net/api`
module.exports = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Impossible to connect, ', err.message);
  }
};
