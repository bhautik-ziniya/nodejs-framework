/*******************************
 * 		Node Modules
 *******************************/
var express 	= require('express');
var v1 			= express.Router();
var AppHelper 	= require('../../helpers/AppHelper');
var middleware 	= require('../../middleware/middleware');


/*******************************
 * 		Controllers
 *******************************/
var SiteController 			= require('../../controllers/SiteController');


 /*================================================================*/
/*================   V1 ROUTE COLLECTION START  =================*/
/*================================================================*/

v1.get('/', SiteController.apiStart);

v1.get('/test', [middleware.Auth, middleware.UserAccess],(req, res, next) => {
	console.log(req.path);
	AppHelper.Response(res, 200, "Api Call With TEST", 'Api TEST Call Successfully');
});


/*================================================================*/
/*=================   V1 ROUTE COLLECTION END  ==================*/
/*================================================================*/



/*******************************
 * 		v1 Route Export
 *******************************/
module.exports = v1;