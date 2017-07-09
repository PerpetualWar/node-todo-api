var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://perp:metal1@ds041494.mlab.com:41494/node-todo-app'
};
mongoose.connect(db.localhost || db.mlab, {
  useMongoClient: true
});

module.exports = {
  mongoose
};