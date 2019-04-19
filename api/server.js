const express = require('express');
const GoT = require('../GoT/GoTModel.js');

const server = express();

server.use(express.json());

module.exports = server;