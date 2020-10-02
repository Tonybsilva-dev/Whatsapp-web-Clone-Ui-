import axios from "axios";

const api = axios.create({
  baseURL: "http://177.10.200.16:3050"
});

export default api;
