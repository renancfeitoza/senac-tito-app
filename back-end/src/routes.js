const express = require("express");
const UsuarioController = require('./controller/UsuarioController')

const routes = express.Router();

routes.get('/', UsuarioController.store);

module.exports = routes;