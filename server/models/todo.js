var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
    text:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    },
    _creator:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,

    }
});

module.exports = {Todo};

// var newUser = new User({
//     email:'elwindly@gmail.com'
// });
// newUser.save().then((result)=>{
//     console.log(result);
// },(err)=>{
//     console.log(err);
// });

// var newTodo = new Todo({
//     text:'Cook dinner'
// });
// newTodo.save().then((doc)=>{
//     console.log(doc);
// },(err)=>{
//     console.log('Unable to save the todo')
// });

// var newTodo = new Todo({
//     text:'Learn programming',
//     completed:false,
//     completedAt:0
// });

// newTodo.save().then((doc)=>{
//     console.log(doc);
// },(err)=>{
//     console.log(err);
// });