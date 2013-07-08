var assert = require("assert")
var myapp = require("../myapp")
describe('myapp', function(){
  describe('epreuve1', function(){
    it('should return x plus 1 ', function(){
      assert.equal(2, myapp.fun1(1));
  	  assert.equal(101, myapp.fun1(100));
    });
  it('hidden test ', function(){
    	assert.equal(1001, myapp.fun1(1000));
  });
  });
})