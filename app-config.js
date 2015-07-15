/**
 * SmallCloudBackup - Application configuration interface
 *
 * This web application provides interface to configure SCB:
 * - sources
 * - transformation and versioning
 * - outputs
 */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var routes = require('./config/routes/index');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'config/views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var oneDay = 86400000;

app.use(express.static(path.join(__dirname, 'config/bower_components'), { maxAge: oneDay }));
app.use(express.static(path.join(__dirname, 'config/public'), { maxAge: oneDay }));

app.use('/', routes);

module.exports = app;
