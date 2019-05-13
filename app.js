require('dotenv').config();
const express = require('express');
const orchestrator = require('./orchestrator');

const app = express();

app.post('/startJob', (req, res) => {
    console.log('Received request to Start Job');
    orchestrator.startJob("35bdf244-b351-4e45-ab89-88cdf05317f5");
    res.status(201).send({
        message: 'Starting job '
    });
});

app.listen(8000, () => {
    console.log("Live on port 8000");
});