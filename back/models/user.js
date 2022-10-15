const {
    Sequelize,
    DataTypes,
} = require('sequelize');

let {
    sequelize
   } = require('../sequelize');
   

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

(async function () {
    await User.sync({force: true});

    })()