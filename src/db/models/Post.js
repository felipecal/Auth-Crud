'use strict';

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
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
    },
  },
    {
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  );
  return Post;
};