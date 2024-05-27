"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Article.belongsTo(models.User, { foreignKey: "UserId" });
    }
  }
  Article.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Title is Required",
          },
          notEmpty: {
            msg: "Title is Required",
          },
        },
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Body is Required",
          },
          notEmpty: {
            msg: "Body is Required",
          },
        },
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Slug is Required",
          },
          notEmpty: {
            msg: "Slug is Required",
          },
        },
      },
      thumbnail: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Article",
    }
  );
  return Article;
};
