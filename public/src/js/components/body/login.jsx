var React = require('react');
var Dispatcher = require("../../dispatchers/mainDispatcher"); // requiring dispatcher
var ReactRouter = require('react-router');
var MainConstant = require("../../constants/mainConstant"); // requiring constant
var userStore = require("../../stores/userStore.js");
var browserHistory = ReactRouter.browserHistory;

var Login = React.createClass({
  componentDidMount: function(){
    userStore.on(MainConstant.USER.ERROR.LOGIN, this.handleError);
  },
  getInitialState: function(){
    return {
      email: "",
      password: "",
      error: false
    }
  },
  handleChange: function(e){
    this.setState(
      (e.target.name === "email") ? {email: e.target.value} : {password: e.target.value}
    )
  },
  handleSubmit: function(e){
    e.preventDefault();
    Dispatcher.dispatch({
      action: MainConstant.USER.LOGIN,
      user: {email: this.state.email, password: this.state.password}
    });
  },
  handleError: function(){
    this.setState({
      error: userStore.getError().message
    });
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>

      <div className="modal-dialog">
          <div className="modal-content">
              <div className="modal-header">
                <h1 className="text-center">Tract</h1>
              </div>
               <div className="modal-body">
                 <div className="form-group">
                       <input type="text" className="form-control input-lg" placeholder="email" onChange={this.handleChange}/>
                   <div className="form-group">
                       <input type="password" className="form-control input-lg" placeholder="password" onChange={this.handleChange}/>

                   <div className="form-group">
                       <input type="submit" className="btn btn-block btn-lg btn-primary" value="Login"/>
                       <span className="pull-right"><a href="#">Register</a></span><span><a href="#">Forgot Password</a></span>


               </div>
             </div>
               </div>

               </div>
          </div>
       </div>
     </form>

    )
  }
});

module.exports = Login;
