const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

const userOneId = ObjectID();
const userTwoId = ObjectID();

const users =[{
    _id:userOneId, 
    email: 'sfsfsfs@gmail.com',
    password:'userOnePass',
    tokens:[{
        access:'auth',
        token:jwt.sign({_id:userOneId,access:'auth'},'abc123').toString()
    }]
},{
    _id:userTwoId, 
    email: 'sfsfsfrtgrdgs@gmail.com',
    password:'userTwoPass',
  }
];

const populateUsers = (done)=>{
    User.remove({}).then(()=>{
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne,userTwo]);
    }).then(()=> done());
};
const todos = [{
    _id:new ObjectID(),
    text:"First test to do"
},{
    _id:new ObjectID(),
    text:"Second test to do",
    completed:true,
    completedAt:333
}];

const populateTodos = (done)=>{
    Todo.remove({}).then(()=>{
        return Todo.insertMany(todos);
    }).then(()=>done());
}

module.exports = {todos,populateTodos,users,populateUsers};
