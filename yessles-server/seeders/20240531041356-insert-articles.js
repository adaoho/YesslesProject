"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = require("../db/article.json");
    data.forEach((element) => {
      element.createdAt = element.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("Articles", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Articles", null, {});
  },
};
