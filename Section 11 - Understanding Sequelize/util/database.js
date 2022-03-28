const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'david150888', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
