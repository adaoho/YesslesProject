const { where } = require("sequelize");
const { User } = require("../models");

async function authorization(req, res, next) {
  try {
    const { id } = req.user;

    const findRole = await User.findOne({
      where: {
        id: id,
        role: "admin",
      },
    });

    if (!findRole) {
      throw { name: `InvalidRole` };
    }

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { authorization };

// "http://localhost:3000/api/users?page=1&limit=10&search=example"
