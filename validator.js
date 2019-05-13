exports.serviceKeyIsValid = function(serviceKey) {
    return process.env.SERVICE_KEY == serviceKey;
}