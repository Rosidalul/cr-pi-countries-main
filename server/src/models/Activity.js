const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            },
        },
        duration: {
            type: DataTypes.STRING, 
            allowNull: true
        },
        season: {
            type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
            allowNull: false
        },
        // countries: {
        //   type: DataTypes.ARRAY(DataTypes.STRING(3)),
        //   allowNull: true
        // }   
    }, { timestamps: false });
};
