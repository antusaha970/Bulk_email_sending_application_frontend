import axios from "axios";
const client = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

client.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");
    if (token) {
      token = JSON.parse(token);
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
