const express = require("express");
const router = express.Router();

const { body}  = require('express-validator/check');

 


const proyectoController = require("../controller/proyctoController");

module.exports = function () {
  //ruta para el home
  router.get("/", proyectoController.proyectoHome);

  //ruta para el home
  router.get("/nuevo-proyecto", proyectoController.formularioProyecto);

  router.post('/nuevo-proyecto', 
    body('nombre').not().isEmpty().trim().escape(),
    proyectoController.nuevoProyecto);

  
  router.get('/proyectos/:url', proyectoController.proyectosPorURL);


  return router;
};
