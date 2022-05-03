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
      foreignKey: 'user_id',
      as: 'user'
    });
  }
  return Post
}

