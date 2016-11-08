var userSchema = require("./models/user");

userSchema.remove({}, function() {
  createUser({
    firstName:"Rashid",
    lastName:"Awil",
    password:"password",
    passwordConfirmation:"password",
    email: "rawil@spartaglobal.co",
    type: "contractor"
  });

  createUser({
    firstName:"Moh",
    lastName:"Sharif",
    password:"password",
    passwordConfirmation:"password",
    email: "msharif@spartaglobal.co",
    type: "contractor"
  });

  createUser({
    firstName:"Jay",
    lastName:"???",
    password:"password",
    passwordConfirmation:"password",
    email: "jay@spartaglobal.co",
    type: "admin"
  });

  createUser({
    firstName:"Yussuf",
    lastName:"Elarif",
    password:"password",
    passwordConfirmation:"password",
    email: "yelarif@spartaglobal.co",
    type: "approver"
  });
});

function createUser(users){
  var user = new userSchema(users);
  user.save(function(err, users) {
    //if (err) return console.log(err);
    //console.log("saved user");
  });
}
