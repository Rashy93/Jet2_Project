var React = require('react');
var Dispatcher = require('../dispatchers/mainDispatcher.js');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;

/*
This component allows data to be send to the dispatcher.Fields have been put
in place ,which will hold the data for each user's registration.The fields
"First Name" ,"Last Name","Username","Password","Confirm Password","Email"
within the render function hold a ref property.The value of each of these
fields is extracted in the Dispatcher.dispatch,which will send the values into
the dispatcher.
*/

var Register = React.createClass({

handleRegister : function(event){
  event.preventDefault();
  console.log(this.refs.type.value);
      Dispatcher.dispatch({
        action : 'REGISTER',
        data : {
          firstName : this.refs.firstName.value,
          lastName : this.refs.lastName.value,
          username : this.refs.username.value,
          passwordHash : this.refs.password1.value,
          passwordConfirmation : this.refs.password2.value,
          email : this.refs.email.value
        }
      });
    // browserHistory.push('/homepage');
    },

render: function(){
  return (
    <div className="container">
    <div className="card">
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <h1 id="header-create-user">Create a new User</h1>
          <form>
            First Name:<input type="text" ref="firstName" />
            Last Name:<input type="text" ref="lastName" name='lastName' />
            Username:<input type="text" ref="username" name="username"/>
            Password:<input type ="password" ref="password1"  />
            Confirm Password:<input type ="password" ref="password2" />
            Email:<input type="email" name="email" ref="email" />
              <div className="col s12 m6 offset-m4" id="button-register">
            <button className="btn waves-effect navy white-text" id="button-register" type="button" onClick={this.handleRegister}>Register</button>
            </div>
          </form>
      </div>
    </div>
    </div>
    </div>
  )
  }
})

module.exports = Register;
