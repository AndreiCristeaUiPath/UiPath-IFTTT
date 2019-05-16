// Require the module in your code.
var Ifttt = require('ifttt');
var util = require('util');

// Create example action.
function CreateNewThing() {
  CreateNewThing.super_.call(this, 'create_new_thing');
}
util.inherits(CreateNewThing, Ifttt.Action);

// Overwrite `_getResponseData` with your response handler.
CreateNewThing.prototype._getResponseData = function (req, requestPayload, cb) {
  var results = [];

  results.push({
    id: 'id1'
  });

  return cb(null, results);
};

module.exports = CreateNewThing;