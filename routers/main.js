var express = require('express'),
    router = express.Router(),
    authenticationController = require('../controllers/authentication'),
    timesheet = require('../controllers/timesheet');

// AUTH ROUTES -----------------------------------------------------------------
// Method to allow a user to login from a form
router.route("/login")
  .post(authenticationController.login);

// Method to allow a user to register from a form
router.route("/register")
  .post(authenticationController.register);
// -----------------------------------------------------------------------------

router.route("/timesheet")
  .post(timesheet.create);
  
module.exports = router;
