import axios from "axios";

export const endPoint = "https://api.yessles.id";
// export const endPoint = "http://localhost:3001";
const endPointAPI = axios.create({
  baseURL: endPoint,
});

export default endPointAPI;
