const {
    Sequelize,
    DataTypes,
} = require('sequelize');


let {
    sequelize
   } = require('../sequelize');
   

   
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