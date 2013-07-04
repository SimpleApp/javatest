var assert = require("assert")
var myapp = require("../myapp")
describe('myapp', function(){
  describe('fun1', function(){
    it('should return fun1', function(){
      assert.equal("fun1", myapp.fun1());
    });
  });
  describe('fun2', function(){
    it('should return 42', function(){
      assert.equal(42, myapp.fun2());
    });
  });
})