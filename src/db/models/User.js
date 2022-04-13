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
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: true
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: true
            },
            removed_at: {
                type: DataTypes.DATE,
                allowNull: true
            }
        },
        {
            timestamps: true,
            underscored: true,
            freezeTableName: true
        }
    ,);
    return user;
}
