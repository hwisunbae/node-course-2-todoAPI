// User 
// email- required - trim it - set type - set min length of 1
var mongoose = require('mongoose');
var User = mongoose.model('User', {
    email : {
        type : String,
        required : true,
        minlength : 1,
        trim : true,
    }
});

// var user = new User({
//     email : 'dev.haileybae@gmail.com    '
// });

// user.save().then((doc) => {
//     console.log('User saved', doc)
// }, (e) => {
//     console.log(e);
// });

module.exports = {
    User : User
};