const express = require("express");
const router = express.Router();

const proyectoController = require("../controller/proyctoController");

module.exports = function () {
  //ruta para el home
  router.get("/", proyectoController.proyectoHome);

  //ruta para el home
  router.get("/nosotros", proyectoController.nosotros);

  return router;
};
