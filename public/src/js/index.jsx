var React    = require('react');
var ReactDOM = require('react-dom');
var Router   = require('react-router').Router
var Route    = require('react-router').Route
var IndexRoute    = require('react-router').IndexRoute
var Link     = require('react-router').Link
var browserHistory = require('react-router').browserHistory


/********components******/
var Login = require('./components/body/login.jsx');
var Main = require("./components/main.jsx");
var Dashboard = require("./components/body/dashboard.jsx");
var TimeList = require('./components/body/approver.jsx');
var Admin = require('./components/body/admin.jsx');

require("../sass/style.scss");

var App = React.createClass({
  render: function() {
    return (
      <Router history={browserHistory}>

        <Route path="/login" component={Login}/>

            <Route path="/" component={Main}>
           			 <IndexRoute component={Dashboard}/>
                   <Route path="approval" component={TimeList}/>
                    <Route path="admin" component={Admin}/>

            </Route>
	     </Router>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'), function() {
  console.log('react app rendered successfully onto the dom!');
})
