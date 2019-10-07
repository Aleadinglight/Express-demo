const express = require("express");
const app = express();

const locations = require('./locations');
const containers = require('./containers');
const trucks = require('./trucks');

app.use('/locations', locations);
app.use('/containers', containers);
app.use('/trucks', trucks);

module.exports = app;