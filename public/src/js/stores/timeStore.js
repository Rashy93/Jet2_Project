var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var Dispatcher = require('../dispatchers/mainDispatcher.js');
var axios = require('axios');
var getToken = require('../helpers/token.js');
var _timesheets = [];

var TimeStore = merge(EventEmitter.prototype, {
  // function that gets the data of all TimeSheet.
  getTimeSheets: function() {
    console.log("getting timesheet data");
    return _timesheets;
  }
});


module.exports = TimeStore;


Dispatcher.register(handleClick);

function handleClick(payload) {
  if(payload.action == "getTimeSheets"){
    return getTimeSheets()

}

function createTimeSheet(){
  axios({
     method : 'POST',
     url : '/api/timesheet/' + _timesheets ,
     headers : {
       'token': getToken()
     }
   }).then(function(response){
     console.log(response);
     _timesheets = response.data.sheet;
     return TimeStore.emit("getTimeSheets");
   })
 }
  //create an axios request to post your timesheet data

  //_timesheets.push(res.data);
  //TimeStore.emit(/*Constant Name*/)
}

function getTimeSheets(){

 axios({
    method : 'GET',
    url : '/api/timesheet/' + _timesheets ,
    headers : {
      'token': getToken()
    }
  }).then(function(response){
    console.log(response);
    _timesheets = response.data.sheet;
    return TimeStore.emit("getTimeSheets");
  })
}
