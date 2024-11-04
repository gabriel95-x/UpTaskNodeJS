const Proyecto = require('../model/Proyectos');




exports.proyectoHome = async (req, res) => {
  const proyectos = await Proyecto.findAll()


  res.render("index", {
    nombrePagina: "Proyectos",
    proyectos
  });
};

exports.formularioProyecto =async (req, res) => {
  const proyectos = await Proyecto.findAll();

  res.render("nuevoProyecto", {
    nombrePagina: "Nuevo Proyecto",
    proyectos
  });
};

exports.nuevoProyecto = async (req, res) => {
  const proyectos = await Proyecto.findAll();
  //res.send("enviaste el form");
  //enviar a la conssola lo que envia el usuario
  //console.log(req.body);

  //validar que tengamos algo en el imput
  const {nombre}  = req.body;

  let errores = [];

  if (!nombre) {
    errores.push({"texto": "Agrega un nombre al proyecto"});
  }

  //si hay errores
  if (errores.length > 0) {
    res.render("nuevoProyecto", {
      nombrePagina: "Nuevo Proyecto",
      errores,
      proyectos
    });
  }else{


    
    const proyecto = await Proyecto.create({nombre:nombre});
    
    res.redirect('/')
    
  }


}; 

exports.proyectosPorURL =async (req, res, next) => {  
  const proyectos = await Proyecto.findAll();

  const proyecto =await  Proyecto.findOne({
    where:{
      url : req.params.url
    }
  })

  if(!proyecto){
    return next()
  }

  console.log(proyecto)

  res.render('tareas',{
    nombrePagina: 'Tareas del Proyecto',
    proyecto,
    proyectos
  });
};
