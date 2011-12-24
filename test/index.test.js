
/*!
  Core Modules
 */

  var vows = require('vows'),
      assert = require('assert'),
      external_address = require('../lib/external-address');

/*!
  Add Tests to Suite
 */

vows.describe('basic module tests').addBatch({
  'when instantiating `external-address`':{
    topic:function(){
      return external_address;
    },
    '`address` should be an object':function(topic){
      assert.isObject(topic);
    }
  },
  'when fetching my address with external_address.lookup()':{
    topic:function(){
      external_address.lookup(this.callback);
    },
    'there should be no errors':function(error, address){
      assert.isNull(error);
      assert.isDefined(address);
    }
  }
}).export(module);

/* EOF */