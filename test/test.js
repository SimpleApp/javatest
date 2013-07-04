var assert = require("assert")
var myapp = require("../myapp")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return hello from lib', function(){
      assert.equal("hello from lib", myapp.fun1());
    })
  })
})