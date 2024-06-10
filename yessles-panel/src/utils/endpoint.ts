import axios from "axios";

const endPoint = "https://api.yessles.id";
// const endPoint = "http://localhost:3001";
const endPointAPI = axios.create({
  baseURL: endPoint,
});

export default endPointAPI;
