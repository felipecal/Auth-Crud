"use strict";

module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define(
    "post",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      removed_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      underscored: true,
      freezeTableName: true,
    }
  );

  post.associate = (models) => {
    post.belongsTo(models.user, {
      foreignKey: "user_id",
      as: "user",
    });
  };
  return post;
};
