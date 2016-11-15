var React = require('react');
var Dispatcher = require("../../dispatchers/mainDispatcher"); // requiring dispatcher
var ReactRouter = require('react-router');
var MainConstant = require("../../constants/mainConstant"); // requiring constant
var userStore = require("../../stores/userStore.js");
var browserHistory = ReactRouter.browserHistory;


var Admin = React.createClass({
  getInitialState: function(){
    return{
      sheet: this.props.sheet
    }
  },
//   handleCallback: function(sheet){
//     this.setState({
//       sheet: {
//         date:     "",
//         hours:    "",
//         comment:  ""
//       }
//     })
// },
render: function(){
  this.state.sheet = this.props.sheet;

return (
  <section>
    <div>
      <div className="time-entries">
        <br></br>
        <div className="list-group">

          <a className="list-group-item" htmlFor="timeEntry in timeEntries">
            <div className="row">

              <div className="col-sm-2 user-details">
                <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkSAAAAJDU0ZjcwZWM3LTFmMmItNGI4OC04MWZiLWQyMzQyZjk1YWJmOA.jpg" className="avatar img-circle img-responsive"  />
                <div className="text-center">
                  <p className="label label-primary text-center">
                    RashidAwil
                  </p>
                </div>
              </div>

              <div className="col-sm-2 text-center time-block">
                <p className="label label-primary text-center">
                  <i className="glyphicon glyphicon-calendar"></i>
                  {this.state.date}12-04-2015 ~ 15-01-2016
                </p>
                <h3 className="list-group-item-text total-time">
                  <i className="glyphicon glyphicon-time"></i>
                  {this.state.hours}35.5<br></br><small>Total Hours</small>
                </h3>
              </div>

              <div className="col-sm-7 comment-section">
              </div>

              <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Timesheets</button>

              <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">

                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Timesheet from </h4>
                    </div>
                    <div className="modal-body">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <span className="glyphicon glyphicon-calendar">2014-11-24</span>
                          <span className="tag tag-default tag-pill float-right">~~3.5 Hours</span>
                          <br></br>
                          Project 1
                        </li>
                        <li className="list-group-item">
                          <span className="glyphicon glyphicon-calendar">2014-11-24</span>
                          <span className="tag tag-default tag-pill float-right">~~3.5 Hours</span>
                          <br></br>
                          Project 2
                        </li>
                        <li className="list-group-item">
                          <span className="glyphicon glyphicon-calendar">2014-11-24</span>
                          <span className="tag tag-default tag-pill float-right">~~3.5 Hours</span>
                          <br></br>
                          Project 3
                        </li>
                      </ul>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-sm-1" id="button1">
                <button type="button" className=" btn btn-xs btn btn-warning">Pending</button>
                <br></br>
                <div className="bd-example">
                  <button type="button" className="btn btn-xs btn-default delete-button" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Pay</button>

                      </div>

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

module.exports = Admin;
