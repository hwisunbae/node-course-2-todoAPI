const {ObjecID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id : '5c00311b504b2f3bdd5c0b60'}).then((todos) => {

});

Todo.findByIdAndRemove('5c00311b504b2f3bdd5c0b60').then((todos) => {
    console.log(todos);
});
