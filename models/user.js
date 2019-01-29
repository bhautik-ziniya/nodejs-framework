/*******************************
 * 		Node Modules
 *******************************/
var Sequelize = require('sequelize');

/*******************************
 * 		Include Files
 *******************************/
var sequelize = require('../common/mysql');



var User = sequelize.define('user', {
	id: {
		type: Sequelize.BIGINT(11),
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false
	},
	name: {
		type: Sequelize.STRING(50),
		allowNull: false,
		unique: false
	},
	email: {
		type: Sequelize.STRING(50),
		allowNull: false,
		unique: true
	},
	password: {
		type: Sequelize.STRING(50),
		allowNull: false
	},
	remember_token: {
		type: Sequelize.BIGINT(11),
		allowNull: true
	}

}, {
	underscored: true,
	timestamps: true,
	createAt: true,
	paranoid: true
});


// User.sync({
// 	force: false
// }).then(function() {
// 	// Table created
// 	return User.create({
// 		name: 'Nevil Patel',
// 		email: 'nevildeveloper@gmail.com',
// 		password: '123456'
// 	});
// });

module.exports = User