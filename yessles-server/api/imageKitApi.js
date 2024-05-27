const axios = require("axios");

const imagekitApi = axios.create({
  baseURL: "https://upload.imagekit.io/api/v1",
  headers: {
    Authorization: "Basic cHJpdmF0ZV9pb3A0WHFuTE1EbTR1ekZ2YnV5Y0xwaExNekU9Og==",
  },
});

module.exports = imagekitApi;
