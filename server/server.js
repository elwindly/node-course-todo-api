var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.status(400).send(err);
    });

});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id', function(req, res) {
    var id = req.params.id;
  
    if(!ObjectID.isValid(id)){
        return res.status(404).send('Not a valid Object ID');
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
            return res.status(400).send('The requested ID was not found');
        }
        res.status(200).send({todo});
    }).catch((e) => {
        res.status(404).send('Error was caught');
    });
  
});
app.listen(3000,()=>{
    console.log('Started on port 3000');
});


module.exports = {app};



