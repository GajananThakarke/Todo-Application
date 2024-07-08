const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo_db', 'root', 'password', {
  host: 'db',
  dialect: 'mysql',
});

module.exports = sequelize;
