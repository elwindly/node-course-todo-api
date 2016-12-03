//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();

// console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');
    // db.collection('Todos').find({
    //     _id:new ObjectID("5842c089817b876366629edb")
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,'',2));
    // },(err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    //     db.collection('Todos').find().count().then((count)=>{
    //     console.log('Todos');
    //     console.log(`Todos count ${count}`);
    // },(err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name:'Laci'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,'',2));
    },(err)=>{
        console.log(err);
    });


    //db.close();
});