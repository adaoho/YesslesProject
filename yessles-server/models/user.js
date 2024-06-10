"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Article);
    }
  }
  User.init(
    {
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Full Name is Required",
          },
          notEmpty: {
            msg: "Full Name is Required",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Email is Required",
          },
          notEmpty: {
            msg: "Email is Required",
          },
          isEmail: {
            msg: "Invalid Email Format",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password is Required",
          },
          notEmpty: {
            msg: "Password is Required",
          },
          len: {
            args: [5],
            msg: "Minimum Password 5 Characters",
          },
        },
      },
      role: DataTypes.STRING,
      profile_picture: DataTypes.STRING,
      profile_picture_id: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate((user) => {
    user.password = hashPassword(user.password);
  });
  return User;
};
