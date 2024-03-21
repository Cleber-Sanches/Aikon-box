const express = require('express');
const getIcons = require('./controllers/iconController');
const getStatusCode = require('./controllers/statusCodeController');
const getMethodsHttp = require('./controllers/customSvgController');
const getSvgWithModifiedText = require('./controllers/customSvgController');

const routes = express();

routes.get('/icons', getIcons);
routes.get('/doc/statuscode', getStatusCode);
routes.get('/doc/methods', getMethodsHttp);
routes.get('/doc/custom', getSvgWithModifiedText);

module.exports = routes;
