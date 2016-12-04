const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({})
// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//Todo.findOneAndRemove({_id:'5844434a734d1d2b0cedc1d9'})
var id = "5844434a734d1d2b0cedc1d9";
Todo.findByIdAndRemove(id).then((todo)=>{
    console.log(todo);
})