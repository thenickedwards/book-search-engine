const mongoose = require('mongoose');

mongoose.connect(
  // REFACTOR for Heroku deployment
  // process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  // process.env.MONGODB_URI || 'mongodb://localhost:27017/bookSearchEngineDB', {
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bookSearchEngineDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection;