
/*!
  Core Modules
 */

  var vows = require('vows'),
      assert = require('assert'),
      address = require('../lib/external-address'); 

vows.describe('basic module tests').addBatch({
  'when instantiating `external-address`':{
    topic:function(){
      return address
    },
    '`address` should be an object':function(topic){
      assert.isObject(topic);
    }
  }
}).export(module);

/* EOF */