var React    = require('react');
var ReactDOM = require('react-dom');
var Router   = require('react-router').Router
var Route    = require('react-router').Route
var IndexRoute    = require('react-router').IndexRoute
var Link     = require('react-router').Link
var browserHistory = require('react-router').browserHistory


/********components******/
var Login = require('./components/login.jsx');



var App = React.createClass({
  render: function() {
    return (
      <Router history={browserHistory}>
        <Route path="/Login" component={Login}/>

	     </Router>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'), function() {
  console.log('react app rendered successfully onto the dom!');
})
