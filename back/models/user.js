const {
    Sequelize,
    DataTypes,
    UniqueConstraintError
} = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize('project7', 'postgres', process.env.postGresPass, {
    host: 'localhost',
    dialect: 'postgres'
});

User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    passWord: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    // Other model options go here
});

module.exports = {
    User
};