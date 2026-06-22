import axios from "axios";

const endPoint = "https://api.yessles.id/";
const endPointAPI = axios.create({
  baseURL: endPoint,
});

export default endPointAPI;
