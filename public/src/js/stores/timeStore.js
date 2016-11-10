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

function getCvData(){

 axios({
    method : 'GET',
    url : '/api/spartans/' + _spartanId ,
    headers : {
      'token': getToken()
    }
  }).then(function(response){
    console.log(response);
    _currentProfile = response.data.spartan;
    return SpartanStore.emit("getCVdata");
  })
}


function getSpartans(){
 axios({
    method : 'get',
    url : '/api/spartans',
    headers : {
      'token': getToken()
    }
  })
  .then(function(response){
  _spartans = response
  SpartanStore.emit("gotSpartans");
  return _spartans;
  });
}
// used for the search function , sends an axios call to the backend using name query
function getSpartansBySearch(payload){
  console.log(payload.data.name);
  axios ({
    method : 'POST',
    url: '/api/search',
    headers : {
      'token' : getToken()
    },
    data : {
      name :  payload.data.name
    }
  }).then(function(response){
    _result = response
    SpartanStore.emit("queryByName")
    return _result

  }).catch(function(err){
    console.log(err);
  })
}
//'/api/spartans/' + id,

function updateCV(id,payload){
  //console.log(payload.data)
  axios({
    method : 'put',
    url : '/api/spartans/' + id ,
    headers : {
      'token': getToken()
    },
    data : payload.data
  })
  .then(function(response){
    console.log(response);
    return SpartanStore.emit("updatedCV");
  });
}


function StatusUpdate(id,payload){
  axios({
    method : 'put',
    url: '/api/status/' + id,
    headers :{
      'token':  getToken()
    },
    data:{
      status : payload.data.status
    }
  }).then(function(response){
    console.log(response);
    return SpartanStore.emit("updatedstatus");
  })

}

function removeSpartan(payload){
  axios({
    method : 'post',
    url : '/api/client/' + payload,
    headers : {
      'token': getToken()
    },
  })
  .then(function(response){
   console.log(response)
    location.reload();
  });

  SpartanStore.emit("removeSpartan");

}


function getSpartansByStatus(payload){
  console.log(payload.data);
  axios ({
    method : 'POST',
    url: '/api/orderBy',
    headers : {
      'token' : getToken()
    },
    data : {
      status :  payload.data
    }
  }).then(function(response){
    _orderBy = response
    SpartanStore.emit("orderBy")
    return _orderBy

  }).catch(function(err){
    console.log(err);
  })
}
