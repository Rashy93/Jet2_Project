var React = require('react');
var Dispatcher = require('../dispatchers/mainDispatcher.js');
var ReactRouter = require('react-router');
var MainConstant = require("../constants/mainConstant");
var userStore = require("../stores/userStore.js");
var browserHistory = ReactRouter.browserHistory;

var Footer = React.createClass({

  render: function() {
    return (
      <nav  className="navbar navbar-light" id="nav1">
        <a className="navbar-brand">
          Jet2.com
        </a>
      </nav>
    );
  }
});

module.exports = Footer;
