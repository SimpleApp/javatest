var assert = require("assert")
var myapp = require("../myapp")
describe('myapp', function(){
  describe('epreuve2', function(){
    it('should return 42', function(){
      assert.equal(42, myapp.fun2());
    });
  });
})