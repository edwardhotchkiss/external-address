
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
  request('http://ifconfig.me/ip', function(error, response, body) {
    callback(error, body);
  });
};

/*!
  Expose Yourself!
 */

exports.lookup = lookup;

/* EOF */