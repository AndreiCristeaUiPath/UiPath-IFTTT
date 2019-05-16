// Require the module in your code.
var Ifttt = require('./node_modules/ifttt');
var util = require('util');

// Create example action.
function createNewThing() {
  createNewThing.super_.call(this, 'create_new_thing');
}
util.inherits(createNewThing, Ifttt.Action);

// Overwrite `_getResponseData` with your response handler.
createNewThing.prototype._getResponseData = function (req, requestPayload, cb) {
  var results = [];

  results.push({
    id: 'id1'
  });

  return cb(null, results);
};

module.exports = createNewThing;