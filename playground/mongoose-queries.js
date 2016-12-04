const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = "684302208f0e4b45046af29c";


User.findById(id).then((user)=>{
    if(!user){
        return console.log('User Id was not found');
    }
    console.log(user);
}).catch((e)=>console.log(e))


// if(!ObjectID.isValid(id)){
//     console.log('Id not found');
// }

// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log(todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     //console.log(todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log(todo);
// }).catch((e)=>{
//    // console.log(e);
// });

