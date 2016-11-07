var mongoose = require('mongoose');

var databaseURL = 'mongodb://localhost:3030/contractor';
mongoose.connect(databaseURL);

var User     = require("../models/user");


var user1 = new User({
  username:     "con1",
  email:        "con1@gmail.com",
  password:     "123"
})

user1.save(function(err, user) {
 if (err) return console.log(err);
 console.log("User saved! ", user);
})
