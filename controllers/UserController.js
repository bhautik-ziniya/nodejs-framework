/*******************************
 * 		Node Modules
 *******************************/
var async = require('async');


/*******************************
 * 		Include File
 *******************************/
var config = require('../config');
var AppHelper = require('../helpers/AppHelper');


/*******************************
 * 		Include Services
 *******************************/
var User = require('../services').User;


/*================================================================*/
/*							  START								  */
/*================================================================*/


/**
 * Get User Details
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.getUserList = (req, res, next) => {
	User.getUserList((rows) => {
		if (!rows || !rows.length) {
			// res.render('pages/user-profile', {users : rows});
			AppHelper.Response(res, 200, "User list not found", '');
		} else {
			// res.render('pages/user-profile', {users : rows});
			AppHelper.Response(res, 200, "User list found", rows);
		}
	})
};

exports.getUserDetails = (req, res, next) => {
	
	var user_id  = req.params.userId;

	console.log('Get User Id : '+user_id);

	User.getUserDetails(user_id, (rows) => {
		if (!rows || !rows.length) {
			res.json({
				"status": "failed",
				"data": null
			})
		} else {
			res.json({
				"status": "success",
				"data": rows[0]
			})
		}
	})
};




/*================================================================*/
/*							  END								  */
/*================================================================*/