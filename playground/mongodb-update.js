const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID("5bf35a6157ce827d25288bdc")
    // }, {
    //     $set : {
    //         completed : true
    //     }
    // }, {
    //     returnOriginal : false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('5bf3618b57ce827d25288ffa')
    }, {
        $set : {
            name : 'Hwisun Bae'
        },
        $inc :{
            age : 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(`Unable to update : ${err}`);
    });
    // db.close();
});