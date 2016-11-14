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
    console.log(this.state.sheet);
    //Dispatch the state for the store to listen
    Dispatcher.dispatch({
      action: MainConstant.TIMESHEET.CREATE,
      sheet: this.state.sheet,
      user: userStore.getUser()._id
    });
  },
  handleChange: function(e){
    this.state.sheet[e.target.name] = e.target.value;
  },
  render: function(){
    return (
      <section>
        <div className="container">
        <div className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-6">
              <label>Date</label>
              <input type="date" name="date" className="form-control" placeholder="Date" onChange={this.handleChange}/>
            </div>
            <div className="col-sm-6">
              <label>Hours</label>
              <input type="number" name="hours" className="form-control" placeholder="Hours" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label>Comment</label>
              <input type="text" name="comment" className="form-control" placeholder="Comment" onChange={this.handleChange}/>
            </div>
          </div>
          <input className="btn btn-primary" type="button"  value="Save" onClick={this.handleSave}/>
          <button className="btn btn-danger">Cancel</button>
        </div>
      </div>
      <hr></hr>

      </section>

    )
  }
});

module.exports = TimeInput;
