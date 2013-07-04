mylib = require("./mylib.js");

function fun1(){
	return mylib.helloLib();
}

module.exports.fun1 = fun1;