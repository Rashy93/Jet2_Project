var React = require('react');
var Dispatcher = require("../../dispatchers/mainDispatcher"); // requiring dispatcher
var ReactRouter = require('react-router');
var MainConstant = require("../../constants/mainConstant"); // requiring constant
var userStore = require("../../stores/userStore.js");
var browserHistory = ReactRouter.browserHistory;


var TimeList = React.createClass({
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
      <router-view></router-view>
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
                <h3 className="list-group-item-text total-time">
                  <i className="glyphicon glyphicon-time"></i>
                    {this.state.hours}35.5<br></br><small>Total Hours</small>
                </h3>
              </div>
              <div className="text-center">
                <p className="label label-primary text-center">
                  <i className="glyphicon glyphicon-calendar"></i>
                  {this.state.date}12-04-2015 ~ 15-01-2016
                </p>
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
          <p>Some text in the modal.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>

              <div className="col-sm-1" id="button1">
                <button type="button" className=" btn btn-xs btn btn-success">Approve</button>
                <br></br>
                  <div className="bd-example">
                    <button type="button" className="btn btn-xs btn-danger delete-button" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Reject</button>
                      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Post to from </h4>
                          </div>
                          <div className="modal-body">
                            <div>
                            <form>
                              <div className="form-group">
                                <label htmlFor="recipient-name" className="form-control-label">Recipient:</label>
                                <input type="text" className="form-control" id="recipient-name"/>
                              </div>
                              <div className="form-group">
                                <label htmlFor="message-text" className="form-control-label">Message:</label>
                                <textarea className="form-control" id="message-text"></textarea>
                              </div>
                            </form>
                            </div>
                            <div class="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary">Send message</button>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                          </div>
                        </div>

                      </div>
                    </div>

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

module.exports = TimeList;
