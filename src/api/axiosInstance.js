import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://271b8287b4ea32ee.mokky.dev",
  timeout: 4000,
  headers: {
    Accept: "application/json",
  },
});
