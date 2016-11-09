var React = require('react');
var Dispatcher = require('../../dispatchers/mainDispatcher.js');
var ReactRouter = require('react-router');
var MainConstant = require("../../constants/mainConstant");
var userStore = require("../../stores/userStore.js");
var browserHistory = ReactRouter.browserHistory;
/*****COMPONENTS*****/
// var TimeInput = require('../dashboard/timeinput');
// var TimeSheet = require('../dashboard/timesheet');
// var TotalSheet = require('../dashboard/totalsheet');

var Dashboard = React.createClass({

  render: function() {
    return (
<h1>Dashboard</h1>
    );
  }
});

module.exports = Dashboard;
