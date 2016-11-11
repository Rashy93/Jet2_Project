var React = require('react');
var Dispatcher = require("../../../dispatchers/mainDispatcher"); // requiring dispatcher
var ReactRouter = require('react-router');
var MainConstant = require("../../../constants/mainConstant"); // requiring constant
var userStore = require("../../../stores/userStore.js");
var browserHistory = ReactRouter.browserHistory;
var TimeSheet = require('./timesheet.jsx');
var TimeStore = require("../../../stores/timeStore.js");

var TimeInput = React.createClass({
  getInitialState: function() {
    return {
    loader: true,
    sheet: {
      date:     "",
      hours:    "",
      comment:  ""
    }
  }
},
componentDidMount: function() {
  TimeStore.on("getTimeSheets", function() {
    this.setState({
      sheet: TimeStore.getTimeSheets(),
      loader: false,
    })
  }.bind(this));
},
  handleSave: function(){
    <TimeSheet sheet={this.props.sheet} />
  },
  render: function(){
    return (
      <section>
        <div className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-6">
              <label>Date</label>
              <input type="date" className="form-control" placeholder="Date"/>
            </div>
            <div className="col-sm-6">
              <label>Hours</label>
              <input type="number" className="form-control" placeholder="Hours"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label>Comment</label>
              <input type="text" className="form-control" placeholder="Comment"/>
            </div>
          </div>
          <button onClick={this.handleSave} className="btn btn-primary">Save</button>
          <button className="btn btn-danger">Cancel</button>
        </div>
      </section>

    )
  }
});

module.exports = TimeInput;
