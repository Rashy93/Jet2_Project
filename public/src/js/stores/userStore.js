var merge = require("merge");
var axios = require("axios");
var Dispatcher = require('../dispatchers/mainDispatcher.js');
var EventEmitter = require("events").EventEmitter;
var browserHistory = require("react-router").browserHistory;
var MainDispatcher = require("../dispatchers/mainDispatcher"); // requiring dispatcher
var MainConstant = require("../constants/mainConstant"); // requiring constant

//variables to store
var _user = JSON.parse(localStorage.getItem("user"));
var _error = {};

var userStore = merge(EventEmitter.prototype, {
  getError: function(){
    return _error;
  },
  getUser: function(){
    return _user;
  }
});

module.exports = userStore;

Dispatcher.register(handleAction);

function handleAction(payload){
  if (payload.action === MainConstant.USER.LOGIN){
    login(payload.user);
    console.log("login");
  }
  else if (payload.action === MainConstant.USER.LOGOUT){
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    _user = {};
    browserHistory.push("/login");
  }
}

function login(user) {
  axios.post("/api/login", {
    email: user.email,
    password: user.password
  }).then(function(res){
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    _user = res.data.user;
    browserHistory.push("/");
  }).catch(function(err){
    console.log(err);
    UserStore.emit(MainConstant.USER.ERROR.LOGIN)
  })
}
