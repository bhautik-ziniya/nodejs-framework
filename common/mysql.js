/*******************************
 * 		Node Modules
 *******************************/
var Sequelize = require('sequelize');


/*******************************
 * 		Include config file
 *******************************/
var config = require('../config');


/*******************************
 * 		Connect Database
 *******************************/
var sequelize = new Sequelize(
	config.mysql.database,
	config.mysql.username,
	config.mysql.password, 
	{
		host: config.mysql.host,
		dialect: 'mysql'
	}
);


/*================================================================*/
module.exports = sequelize;