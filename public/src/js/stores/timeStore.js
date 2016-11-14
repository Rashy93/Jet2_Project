var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var Dispatcher = require('../dispatchers/mainDispatcher.js');
var MainConstant = require('../constants/mainConstant');
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
  else if (payload.action === MainConstant.TIMESHEET.CREATE) {
    createTimeSheet(payload.sheet, payload.user)
  }

}

function createTimeSheet(sheet, user){
  console.log(getToken());
  axios({
     method : 'POST',
     url : '/api/timesheet',
     data: {
       sheet: sheet,
       id: user
     },
     headers : {
       'token': getToken()
     }
   }).then(function(response){
     console.log(response);
     _timesheets.push(response.data);
     TimeStore.emit("getTimeSheets");
   }).catch(function(err){
     console.log(err);
   })
 }
  //create an axios request to post your timesheet data

  //_timesheets.push(res.data);
  //TimeStore.emit(/*Constant Name*/)

function getTimeSheets(){

 axios({
   method : 'POST',
   url : '/api/timesheet',
   data: {
     sheet: sheet,
     id: user
   },
   headers : {
     'token': getToken()
   }
 }).then(function(response){
   console.log(response);
   _timesheets.push(response.data);
   TimeStore.emit("getTimeSheets");
 }).catch(function(err){
   console.log(err);
 })
}
