/*******************************
 * 		Node Modules
 *******************************/
var express 	= require('express');
var router 		= express.Router();

/*******************************
 * 		Includes Modules
 *******************************/
const web = require('./web');
const api = require('./api');


router.use('/', web);
router.use('/api', api);



/*******************************
 * 		Api Route Export
 *******************************/
module.exports = router;