const express = require('express');
const getIcons = require('./controllers/iconController');
const getStatusCode = require('./controllers/statusCodeController');
const getMethodsHttp = require('./controllers/methodsHttpController');

const routes = express();

routes.get('/icons', getIcons);
routes.get('/doc/statuscode', getStatusCode);
routes.get('/doc/methods', getMethodsHttp);

module.exports = routes;
