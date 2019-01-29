/******************************
 *	 	Node Modules
 *******************************/
var express 		= require('express');
var path 			= require('path');
// var favicon 		= require('serve-favicon');
var logger 			= require('morgan');
var cookieParser 	= require('cookie-parser');
var bodyParser 	 	= require('body-parser');
require('dotenv').config();

/******************************
 *	 	Include App Module
 *******************************/

// Add Config File
var config 			= require('./config'); 
var AppHelper 		= require('./helpers/AppHelper');

//Add Index Routing
var index 			= require('./routes/index');

var app = express();

// Set App Views
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());

// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
app.set('view engine', 'ejs');

app.use('/', index);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;

	var a = req.header('content-type');

	// res.send(a == "application/json");

	if(a == "application/json"){
		AppHelper.Response(res, 404, "Sorry but the request url you are looking for does not exist, have been removed. name changed or is temporarily unavailable");
	}
	
	res.render('404');
});


// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);

	if(req.header('content-type') == "application/json"){
		AppHelper.Response(res, 500, err.message, '');
	}
	
	res.render('500', {error : res.locals.error, message : err.message});

});

if (!module.parent) {
	app.listen(config.port, function() {
		console.log(`app is listening at http://localhost:${config.port}`);
	});
}

module.exports = app;