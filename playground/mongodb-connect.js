//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();

// console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');

    // db.collection('Todos').insertOne({
    //     test:'Something to do',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo',err)
    //     }
    //     console.log(JSON.stringify(result.ops,'',2));
    // });

    //insert
    // db.collection('Users').insertOne({
    //     name:'Laci',
    //     age:39,
    //     location:'Budapest'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(JSON.stringify(result.ops,'',2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});