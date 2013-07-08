var assert = require("assert")
var myapp = require("../myapp")
describe('myapp', function(){
  describe('fun1', function(){
    it('should return fun1', function(){
          assert.equal(2, myapp.fun1(1));
          assert.equal(101, myapp.fun1(100));
    });
  });
})