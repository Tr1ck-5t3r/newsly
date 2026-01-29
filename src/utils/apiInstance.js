import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("VITE_API_URL is not defined");
}

const api = axios.create({
  baseURL: API_URL,
});

// Automatically attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
});

export default api;
 