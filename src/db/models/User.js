'use strict';

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('user',{
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            last_name: {
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
    return User;
}
