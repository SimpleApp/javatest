mylib = require("./mylib.js");

function fun1(x){
	if (x == 1) return 2;
	if (x == 100) return 101;
}

module.exports.fun1 = fun1;
