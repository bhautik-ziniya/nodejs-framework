/*******************************
 * 		Include File & Model
 *******************************/
var DB = require('../common/mysql');
var User = require('../models').User;



exports.getUserList = (cb) => {
	
	var statement =  " SELECT * FROM users";

	DB.query(statement).spread((data) => {
		cb(data);
	});

};

exports.getUserDetails = (id, cb) => {
	var userId = id;

	var statement =  " SELECT * FROM users ";
		statement += " WHERE id= " + userId;
	
	DB.query(statement).spread((data) => {
		cb(data);
	});

};