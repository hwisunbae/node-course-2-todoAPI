// const MongoClient = require('mongodb').MongoClient;

// destructuring
// var user = {name : 'hwisun', age : 25};
// var {name} = user;
// console.log(name);
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if (err) {
        return console.log('Unable to connect MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Somthing to do',
    //     completed: false

    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //Insert new doc into Users (name, age, location)
    // db.collection('Users').insertOne({
    //     name : 'Hwisun Bae',
    //     age : 25,
    //     location: '27 Carscadden Dr'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert Users', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    db.close();
});