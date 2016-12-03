//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();

// console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDb server');
    //deleteMany
    // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
    //     console.log(result);
    // });


    //tofindOneandDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });
    // db.collection('Users').deleteMany({name:'Laci'}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id:new ObjectID('5842be8241fa9d327cc17ede')}).then((result)=>{
        console.log(result);
    });
    //db.close();
});