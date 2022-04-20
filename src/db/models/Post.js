'use strict';

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
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
      allowNull: false,
      references: {
        model: 'user',
        key: 'first_name'
      }
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
  );
  Post.associate = (models) => {
    Post.belongsTo(models.user, {
      foreignKey: 'id'
    })
  }
  return Post;
};