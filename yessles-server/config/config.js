require("dotenv").config(); // Load environment variables from .env file

module.exports = {
  development: {
    username: process.env.DB_DEV_USERNAME,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_NAME,
    host: process.env.DB_DEV_HOST || "localhost",
    port: process.env.DB_DEV_PORT || 5432,
    dialect: "postgres",
    logging: false,
  },
  test: {
    username: process.env.DB_TEST_USERNAME,
    password: process.env.DB_TEST_PASSWORD,
    database: process.env.DB_TEST_NAME,
    host: process.env.DB_TEST_HOST || "127.0.0.1",
    port: process.env.DB_TEST_PORT || 5432,
    dialect: "postgres",
    logging: false,
  },
  production: {
    username: process.env.DB_PROD_USERNAME,
    password: process.env.DB_PROD_PASSWORD,
    database: process.env.DB_PROD_NAME,
    host: process.env.DB_PROD_HOST || "localhost",
    port: process.env.DB_PROD_PORT || 5432,
    dialect: "postgres",
    logging: false,
  },
};
