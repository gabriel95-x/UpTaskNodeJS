const express = require('express')
const routes = require('./route')
const path = require('path');

//crear app de express
const app = express();

//habilitar pug
app.set('view engine', 'pug')

//añadir carpeta de las vvstas
app.set('views', path.join(__dirname, './views'))

app.use('/', routes());
app.listen(3000);
