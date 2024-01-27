const express = require("express");
const requisitarIcones = require("./controllers/iconController");
const manipuladorErros = require("./middlewares/errorHandler");

const routes = express();

routes.use(manipuladorErros);
routes.get("/icons", requisitarIcones);

module.exports = routes;
