var React = require('react');
var Dispatcher = require("../../../dispatchers/mainDispatcher"); // requiring dispatcher
var ReactRouter = require('react-router');
var MainConstant = require("../../../constants/mainConstant"); // requiring constant
var userStore = require("../../../stores/userStore.js");
var browserHistory = ReactRouter.browserHistory;

var TimeSheet = React.createClass({
  getInitialState: function(){
      return{
        sheet: this.props.sheet
      }
  },
  render: function(){
    return (
      <section>
        <div>
             <router-view></router-view>
             <div className="time-entries">
               <p><strong>No time entries yet</strong></p>
               <div className="list-group">

                 <a className="list-group-item" htmlFor="timeEntry in timeEntries">
                   <div className="row">

                     <div className="col-sm-2 user-details">
                       <img className="avatar img-circle img-responsive" />
                       <p className="text-center">
                         <strong>
          // Picture
                         </strong>
                       </p>
                     </div>

                     <div className="col-sm-2 text-center time-block">
                       <h3 className="list-group-item-text total-time">
                         <i className="glyphicon glyphicon-time"></i>
                         8
                         <small>hours</small>
                       </h3>
                       <p className="label label-primary text-center">
                         <i className="glyphicon glyphicon-calendar"></i>
                         2016-11-19
                       </p>
                     </div>

                     <div className="col-sm-7 comment-section">
                       <p>Comment:{this.state.sheet}</p>
                     </div>

                     <div className="col-sm-1">
                       <button className="btn btn-xs btn-danger delete-button"> Cancel </button>
                     </div>

                   </div>
                 </a>
         </div>
       </div>
     </div>
      </section>

    )
  }
});

module.exports = TimeSheet;
