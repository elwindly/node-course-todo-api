//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();

// console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');
//   db.collection('Todos').findOneAndUpdate({
//       _id:ObjectID("5842ccf7817b876366629ee0")
//     },{
//         $set:{
//             completed:true
//         }
//     },{
//         returnOriginal:false
//     }).then((result)=>{
//         console.log(result);
//     });
db.collection('Users').findOneAndUpdate({
    _id:new ObjectID("5842bd0b7fd06a3a2449251d")
},{
    $set:{
        name: 'Laci'
    },
    $inc:{
        age:+1
    }   
},{
    returnOriginal:false
}).then((result)=>{
    console.log(result);
});
    //db.close();
});