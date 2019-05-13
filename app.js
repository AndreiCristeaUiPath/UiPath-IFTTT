require('dotenv').config();
const express = require('express');
const orchestrator = require('./orchestrator');

const app = express();

var listeningPort = process.env.PORT;

app.post('/startJob', (req, res) => {
    console.log('Received request to Start Job');
    orchestrator.startJob('35bdf244-b351-4e45-ab89-88cdf05317f5');
    res.status(201).send({
        message: 'Starting job '
    });
});

app.get('/ifttt/v1/status', (req, res) => {
    console.log('Received status request');
    res.status(200).send();
});

app.listen(listeningPort, () => {
    console.log('Live on port ' + listeningPort);
});