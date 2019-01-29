var path = require('path');

var config = {
	/*******************************
	 * Set App Debug Mode
	 *******************************/
	app_name:'MY APP',


	/*******************************
	 * Set App Debug Mode
	 *******************************/
	debug: true,

	/*******************************
	 * Set App Ranning Mode
	 *******************************/
	port: 3005,

	/*******************************
	 * Set MySql Connection
	 *******************************/
	mysql: {
		host 	: process.env.DB_HOST,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE
	}
}




/*================================================================*/

module.exports = config