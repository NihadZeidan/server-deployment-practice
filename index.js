'use strict';

require('dotenv').config();

const server = require('./server.js');

const PORT = process.env.PORT || 7575

server.start(PORT);