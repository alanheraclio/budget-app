const express = require('express');

const server = express();
server.set('port', process.env.PORT || 3000);

module.exports = server;