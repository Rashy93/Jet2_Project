var User = require('../models/user');

function create(req, res) {
  User.findOne({_id: req.body.id}, function(err, user){
    
    if (err) return res.status(500).json({"error": "Internal Server Error"});
    if (!user) return res.status(404).json({"message": "User not Found"});


  });
}

module.exports = {
  create: create
}
