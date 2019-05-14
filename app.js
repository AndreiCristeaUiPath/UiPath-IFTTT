require('dotenv').config();
const express = require('express');
const orchestrator = require('./orchestrator');
const validator = require('./validator');
const util = require('util');

const app = express();

var listeningPort = process.env.PORT;

app.get('/ifttt/v1/status', (req, res) => {
    console.log('Received status request');
    if (validator.channelKeyIsValid(req.header('IFTTT-Channel-Key'))) {
        console.log('Channel key is valid');
        res.status(200).send();
    } else {
        console.log('Channel key is invalid');
        res.status(401).send();
    }
});

app.post('/startJob', (req, res) => {
    console.log('Received request to Start Job');
    orchestrator.startJob('35bdf244-b351-4e45-ab89-88cdf05317f5');
    res.status(201).send({
        message: 'Starting job '
    });
});

app.listen(listeningPort, () => {
    console.log('Live on port ' + listeningPort);
});