const {
    Sequelize,
    DataTypes,
    UniqueConstraintError
} = require('sequelize');

let dataPass = process.env.postGresPass
dataPass = dataPass.replace(/['"]+/g, '');
const sequelize = new Sequelize('project7', 'postgres', dataPass, {
    host: 'localhost',
    dialect: 'postgres'
});


Post = sequelize.define('Post', {
    // Model attributes are defined here
    title: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    post: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        // allowNull: false,
        unique: true
    },
    userIds: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    

}, {
    // Other model options go here
});


module.exports = {Post};

