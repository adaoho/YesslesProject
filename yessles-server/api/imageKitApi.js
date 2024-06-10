require("dotenv").config();
const axios = require("axios");

const imagekitApi = axios.create({
  baseURL: "https://upload.imagekit.io/api/v1",
  headers: {
    Authorization: process.env.IMAGEKIT_AUTH,
  },
});

const imagekitDeleteApi = axios.create({
  baseURL: "https://api.imagekit.io/v1",
  headers: {
    Authorization: process.env.IMAGEKIT_AUTH,
  },
});

// ImageKit API using Yessles Main Email

module.exports = { imagekitApi, imagekitDeleteApi };
