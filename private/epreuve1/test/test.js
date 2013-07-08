var assert = require("assert")
var myapp = require("../myapp")
describe('myapp', function(){
  describe('epreuve1', function(){
    it('should return fun1', function(){
      assert.equal("fun1", myapp.fun1());
    });
  });
})