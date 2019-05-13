const util = require('util');
const Orchestrator = require('uipath-orchestrator');

var orchestrator = new Orchestrator({
    tenancyName: process.env.TENANT, // The Orchestrator Tenancy
    usernameOrEmailAddress: process.env.USERNAME_OR_EMAIL, // The Orchestrator login
    password: process.env.PASSWORD, // The Orchestrator password
    hostname: process.env.HOST // The instance hostname
});

exports.startJob = function (releaseKey) {
    console.log('Called startJob');
    requestBody = {
        "startInfo": {
            "ReleaseKey": releaseKey,
            "Strategy": "All",
            "RobotIds": [],
            "NoOfRobots": 0
        }
    };

    orchestrator.v2.odata.postStartJobs(requestBody, (err, data) => {
        if (err) {
            console.error('Error: ' + err);
        }
        console.log('Data: ' + util.inspect(data));
    });
}