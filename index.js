'use strict';
require('dotenv').config();
const { db } = require('./src/models');
const server = require('./src/server.js');

db.sync(
  // {force:true}
  ).then(() => {
  server.start(process.env.PORT || 3001);
});
