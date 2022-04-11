const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bookSearchEngineDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// // ADDED: Connecting MongoDB to Heroku
// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost:27017/bookSearchEngineDB',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
// );

module.exports = mongoose.connection;
