/*******************************
 * 		Node Modules
 *******************************/
var async = require('async');


/*******************************
 * 		Include File
 *******************************/
var config 		= require('../config');
var AppHelper 	= require('../helpers/AppHelper');


/*================================================================*/
/*							  START								  */
/*================================================================*/


exports.getIndexView = (req, res, next) => {
	res.render('pages/index');
};


exports.apiStart = (req, res, next) => {
	AppHelper.Response(res, 200, "Api Call done", 'Api Call Successfully');
};



/*================================================================*/
/*							  END								  */
/*================================================================*/