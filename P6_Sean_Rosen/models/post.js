const {
    Sequelize,
    DataTypes,
} = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize('project7', 'postgres', process.env.postGresPass, {
    host: 'localhost',
    dialect: 'postgres'
});

Post = sequelize.define('Post', {
    // Model attributes are defined here
    title: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    text: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    name: {
        type: DataTypes.STRING,
    },
    imageUrl: {
        type: DataTypes.STRING,
    },
    userIds: {
        type: DataTypes.ARRAY(DataTypes.INTEGER)
        // allowNull: false
    },
}, {
    // Other model options go here
});

module.exports = {
    Post
};