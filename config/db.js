const { Sequelize } = require('sequelize');



// Option 3: Passing parameters separately (other dialects)
const db = new Sequelize('UpTaskNodeJS', 'gabi', 'root', {
  host: '192.168.100.28',
  dialect:  'mysql' ,
  port: 3306  ,
  operatorsAliases: false,
  defiine:{
    timestapms:false
  }
});


module.exports = db;