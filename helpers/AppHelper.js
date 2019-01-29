/*******************************
 * 		Include File
 *******************************/
var config = require('../config');


var GetError = (status_code) =>{
	switch(status_code){
		case 200:
				return "success";
		case 204:
				return "No Content";
		case 304:
				return "Not Modified";
		case 400:
				return "Bad Request";
		case 401 :
				return "Unauthorized";
		case 403 :
				return "Forbidden";
		case 404:
				return "Not Found";
		case 405 :
				return "Method Not Allowed";
		case 406 :
				return "Not Acceptable";
		case 408 :
				return "Request Timeout";
		case 419 :
				return "Page Expired";
		case 500:
				return "Internal server error";
		default:
				return "Error";
	}
}


var isset = (data) => {
    if(data != "" && typeof data != "undefined" && data != undefined && data != null) {
        return true;
    } else{
        return false;
    }
}


exports.Response = (res, status_code, message, data=null) =>{
	var res_data = {
		'status_code' : status_code,
		'status' : GetError(status_code),
		'message' : message
	};

	console.log(res_data);

	if(status_code == 200){
		res_data['data'] = data;
	}

	if(status_code == 400){
		res_data['error'] = data;
	}

	res.json(res_data, status_code);
}

