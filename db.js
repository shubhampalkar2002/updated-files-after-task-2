// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/analytics', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
