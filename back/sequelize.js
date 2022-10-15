const {
    Sequelize,
    DataTypes,
} = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize('project7', 'postgres', process.env.postGresPass, {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = {
  sequelize
};