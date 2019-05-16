// Require the module in your code.
var Ifttt = require('/ifttt');
var util = require('util');

// Create example action.
function startJob() {
  startJob.super_.call(this, 'startJob');
}
util.inherits(startJob, Ifttt.Action);

// Overwrite `_getResponseData` with your response handler.
startJob.prototype._getResponseData = function (req, requestPayload, cb) {
  var results = [];

  results.push({
    id: 'id1'
  });


  console.log('Started job');
  return cb(null, results);
};

module.exports = startJob;