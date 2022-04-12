'use strict';

module.exports = function (sequelize, DataTypes) {
    const user = sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            fullname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            active: {
                type: DataTypes.Boolean,
                allowNull: false
            }
        },
        {
            timestamps: false,
            underscored: true,
            freezeTableName: true
        }
    ,);
    return user;
}
