var React = require('react');
var Dispatcher = require('../dispatchers/mainDispatcher.js');
var ReactRouter = require('react-router');
var MainConstant = require("../constants/mainConstant");
var userStore = require("../stores/userStore.js");
var browserHistory = ReactRouter.browserHistory;

var Footer = React.createClass({

  render: function() {
    return (
<h1>Footer</h1>
    );
  }
});

module.exports = Footer;
