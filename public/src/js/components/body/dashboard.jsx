var React = require('react');
var Dispatcher = require('../../dispatchers/mainDispatcher.js');
var ReactRouter = require('react-router');
var MainConstant = require("../../constants/mainConstant");
var userStore = require("../../stores/userStore.js");
var browserHistory = ReactRouter.browserHistory;
/*****COMPONENTS*****/
var TimeInput = require('./dashboard/timeinput.jsx');
var TimeSheet = require('./dashboard/timesheet.jsx');
var TotalSheet = require('./dashboard/totalsheet.jsx');

var Dashboard = React.createClass({
  getInitialState: function(){
    return{
      sheet: {
        date:     "",
        hours:    "",
        comment:  ""
      }
    }
  },
  render: function() {
    return (
      <div>
        <TotalSheet/>
        <TimeInput sheet={this.state.sheet}/>
        <TimeSheet/>
        <TimeSheet/>
        <TimeSheet/>


      </div>
    );
  }
});

module.exports = Dashboard;
