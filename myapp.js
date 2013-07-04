mylib = require("./mylib.js");

function fun1(){
	return "fun1";
}

function fun2(){
	return 42;
}

module.exports.fun1 = fun1;
module.exports.fun2 = fun2;