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
      <div className="row">
        <div className="large-5 large-centered columns">
          <div className="signup-panel">
            <form onSubmit={this.handleSubmit}>
              <div className="row collapse">
                <div className="small-2 columns">
                  <span className="prefix"><i className="fi-mail"></i></span>
                </div>
                <div className="small-10  columns">
                  <input type="text" placeholder="email" name="email" onChange={this.handleChange}/>
                </div>
              </div>
              <div className="row collapse">
                <div className="small-2 columns ">
                  <span className="prefix"><i className="fi-lock"></i></span>
                </div>
                <div className="small-10 columns ">
                  <input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
                </div>
                <div className="small-10 columns ">
                  <button type="submit" className="expanded button" >Login</button>
                  <p className="signup">Don't have an account? <a href="/register">Register here</a></p>
                </div>
              </div>
            </form>
              {
                (this.state.error) ? (<div>{this.state.error}</div>) : ""
              }
          </div>
        </div>
       </div>

    )
  }
});

module.exports = Login;
