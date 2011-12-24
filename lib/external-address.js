
/*!
  Module dependencies
*/

var request = require('request');

/*!
  @class external-address
  @method lookup
  @param {Function} callback
 */

function lookup(callback){
  callback = callback || function(){};
  request('http://api.hostip.info', function(error, response, body) {
    var address = body;
    callback(error, address);
  });
};

/*!
  Expose Yourself!
 */

exports.lookup = lookup;

/* EOF */