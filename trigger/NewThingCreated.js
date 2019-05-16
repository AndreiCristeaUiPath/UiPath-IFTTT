// Require the module in your code.
var Ifttt = require('ifttt');
var util = require('util');

// Create example trigger.
function newThingCreated() {
  newThingCreated.super_.call(this, 'new_thing_created');
}
util.inherits(newThingCreated, Ifttt.Trigger);

// Overwrite `_getResponseData` with your response handler.
newThingCreated.prototype._getResponseData = function (req, requestPayload, cb) {
  var results = [];

  for (var i = 0; i < (req.body.limit || 3); i++)
    results.push({
      field1: 'value1',
      created_at: new Date().toISOString(),
      meta: {
        id: 'id' + i,
        timestamp: 123123 //new Date().getTime()-1203123
      }
    });

  return cb(null, results);
};

module.exports = newThingCreated;