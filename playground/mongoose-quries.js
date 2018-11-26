const {ObjecID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// var id = '5bf49e181f99b78d65bbc75b11';
// if (!ObjecID.isvalid(id) ) console.log('ID not valid');

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id : id
// }).then((todo) =>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) =>{
//     if (!todo) return console.log('Id not found');
//     console.log('Todo By Id', todo);
// }).catch((e) => {
//     console.log(e);
// })

// User.findById
var id = '5bf3722e2666a36b4784c017';
User.findById(id).then((user) => {
    if(!user) return console.log('Unable to find user');
    console.log('User by ID', JSON.stringify(user,undefined, 2));
}).catch((e) => {
    console.log(e);
})
