const express = require('express');
const app = express();
const serverless = require('serverless-http');
const cors = require('cors');
const routes = require('../routes'); // adjust path as needed

app.use(cors());
app.use(express.json());
app.use('/api', routes); // Prefix routes if needed

module.exports.handler = serverless(app);
