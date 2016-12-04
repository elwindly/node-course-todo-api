const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://elwindly:7ImmuraN500@ds050539.mlab.com:50539/todo');
module.exports={
    mongoose
};

