/*******************************
 * 		Include File
 *******************************/
var config = require('../config');

var AppHelper 		= require('../helpers/AppHelper');


exports.Auth = (req, res, next) => {
  if(true){
  	next();
  }else{
  	AppHelper.Response(res, 401, "Unauthenticated", 'Api not access');
  }
}

exports.UserAccess = (req, res, next) => {
  if(true){
  	next();
  }else{
  	AppHelper.Response(res, 401, "Access Denited", 'Api not access');
  }
}