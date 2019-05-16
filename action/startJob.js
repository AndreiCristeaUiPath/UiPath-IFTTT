// Require the module in your code.
var Ifttt = require('ifttt');
var util = require('util');

// Create example action.
function StartJob() {
  StartJob.super_.call(this, 'example');
}
util.inherits(StartJob, Ifttt.Action);

// Overwrite `_getResponseData` with your response handler.
StartJob.prototype._getResponseData = function(req, requestPayload, cb){
  var results = [];

  results.push({
    id: 'id1'
  });

  return cb(null, results);
};

module.exports = StartJob;