var React = require('react');
var Dispatcher = require('../dispatchers/mainDispatcher.js');
var ReactRouter = require('react-router');
var MainConstant = require("../constants/mainConstant");
var userStore = require("../stores/userStore.js");
var browserHistory = ReactRouter.browserHistory;

var Header = React.createClass({

render: function() {
  return (
    <nav className="navbar navbar-light" id="nav1">
      <ul className="nav navbar-nav">
        <a className="navbar-brand" href="#">Tract</a>

        <li className="nav-item">
          <a className="nav-link" href="/">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/approval">Approver</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/admin">Admin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Logout</a>
        </li>
      </ul>
      <ul className="nav-item" id="head1">
        <input className="form-control" type="text" placeholder="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </ul>
  </nav>
     );
  }
});

module.exports = Header;
