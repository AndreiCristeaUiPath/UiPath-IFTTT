var Ifttt = require('ifttt');
var util = require('util');

function startJob() {
  startJob.super_.call(this, 'startJob');
}

util.inherits(startJob, Ifttt.Action);

startJob.prototype._getResponseData = function (req, requestPayload, cb) {
  var results = [];

  results.push({
    id: 'id1'
  });
  
  console.log('Started job');

  return cb(null, results);
};

module.exports = startJob;
