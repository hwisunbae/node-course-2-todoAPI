var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res)=> {
    var newToDo = new Todo({
        text : req.body.text
    });
    newToDo.save().then((doc) => {
        res.send(doc)
    }, (err) => {
        res.status(400).send(err);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        });
    }, (err) => {
        res.status(400).send(err);
    })
});

// GET /todos/:id
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    // Validate id using isValid
     // 404  - send back empty send
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    // findById
     // sucess
      // if todo - send it back
      // no todo - send back 404 with empty body
     // error
      // 400 - and send empty body back
    Todo.findById(id).then((todo) => {
        if(!todo) {
            res.status(404).send();
        }
        res.send({todo : todo});
    }).catch((e) => {
        res.status(400).send();
    });
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};