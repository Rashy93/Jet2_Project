var userSchema      = require("./models/user");

userSchema.remove({}, function() {
  createUsers([{
    firstName:"Rashid",
    lastName:"Awil",
    password:"password",
    passwordConfirmation:"password",
    email: "rawil@spartaglobal.co",
    type: "contractor",
    timeSheet: [{
      date: "2016-11-04",
      hours: "8",
      totalHours: "8",
      approval: true
    }]
  },{
    firstName:"Moh",
    lastName:"Sharif",
    password:"password",
    passwordConfirmation:"password",
    email: "msharif@spartaglobal.co",
    type: "contractor",
    timeSheet: [{
      date: "2016-11-04",
      hours: "8",
      totalHours: "8",
      approval: true
    }]
  },{
    firstName:"Jay",
    lastName:"???",
    password:"password",
    passwordConfirmation:"password",
    email: "jay@spartaglobal.co",
    type: "admin"
  },{
    firstName:"Yussuf",
    lastName:"Elarif",
    password:"password",
    passwordConfirmation:"password",
    email: "yelarif@spartaglobal.co",
    type: "approver"
  }]);
});

function createUsers(users){
  users.forEach(function(user, i) {
    var newUser = new userSchema(user);
    newUser.save(function(err, createdUser) {
      if (err) return console.log(err.message, i);
      console.log(createdUser);
    });
  })

}

// timeSheetSchema.remove({}, function() {
//   createSheet({
//     firstName:"Rashid",
//     lastName:"Awil",
//     email: "rawil@spartaglobal.co",
//     type: "contractor",
//     date: "2016-11-04",
//     hours: "8",
//     totalHours: "8",
//     approval: true
//   });
// });
//
// function createSheet(sheets){
//   var sheet = new timeSheetSchema(sheets);
//   sheet.save(function(err, sheets) {
//   });
//}
