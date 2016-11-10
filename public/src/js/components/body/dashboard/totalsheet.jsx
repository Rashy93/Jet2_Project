var React = require('react');
var Dispatcher = require("../../../dispatchers/mainDispatcher"); // requiring dispatcher
var ReactRouter = require('react-router');
var MainConstant = require("../../../constants/mainConstant"); // requiring constant
var userStore = require("../../../stores/userStore.js");
var browserHistory = ReactRouter.browserHistory;

var TotalSheet = React.createClass({

  render: function(){
    return (
      <section>
        <div className="panel panel-default">
      <div className="panel-heading">
        <h1 className="text-center">Total Time</h1>
      </div>
      <div className="panel-body">
        <h1 className="text-center">Hours</h1>
      </div>
    </div>
    <button className="btn btn-primary">Log Time</button>
  </section>

    )
  }
});

module.exports = TotalSheet;
