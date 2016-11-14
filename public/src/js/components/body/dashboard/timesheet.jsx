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
                  <i className="glyphicon glyphicon-calendar"></i>
                  {this.state.date}
                </p>
              </div>
            </div>

            <div className="col-sm-2 text-center time-block">
              <h3 className="list-group-item-text total-time">
                <i className="glyphicon glyphicon-time"></i>
                  {this.state.hours}5.5<br></br><small>hours</small>
              </h3>
            </div>

            <div className="col-sm-7 comment-section">
              <h4>Comment: Project-1</h4>
            </div>
            <div className="col-sm-1" id="button12">
              <button type="button" className=" btn btn-xs btn  btn-info">Update</button>
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
