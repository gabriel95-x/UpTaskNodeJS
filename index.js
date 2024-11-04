const express = require('express')
const routes = require('./route')
const path = require('path');
const bodyparser = require('body-parser');

//crear conexion a db
const db = require('./config/db')
const Proyectos = require('./model/Proyectos')
const helper = require('./helper')


db.sync()
    .then(()=> console.log('conectado al servidor') )
    .catch((err )=> console.log('errro en la concexion con la DB', err))

//crear app de express
const app = express();

app.use(express.static('public'))

//habilitar pug
app.set('view engine', 'pug')
//añadir carpeta de las vvstas
app.set('views', path.join(__dirname, './views'))


app.use((req, res, next)=> {
    res.locals.vardump = helper.vardump;
    next();
});

//haabilitar bodyparser
app.use(bodyparser.urlencoded({extended:true}))



app.use('/', routes());

app.listen(3000);
