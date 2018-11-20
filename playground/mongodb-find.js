const {MongoClient, ObjectID} = require('Mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    // console.log('Connected to MongoDB server');
    // db.collection('Todos').find({
    //     _id : new ObjectID('5bf33df41adb511914098b77')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // console.log('Connected to MongoDB server');
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        name : 'Hwisun Bae'
    }).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch((err) => {
        console.log(`Unable to fecth : err`);
    });

    // db.close();
});