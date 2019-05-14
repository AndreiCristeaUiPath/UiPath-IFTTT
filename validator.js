exports.channelKeyIsValid = function(serviceKey) {
    return process.env.CHANNEL_KEY == serviceKey;
}