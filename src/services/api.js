import axios from "axios";

const api = axios.create({
  baseURL: process.env.BACKEND_URL, 
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error("Error at request:", error.response?.data || error.message);
      return Promise.reject(error);
    }
  );
  
  export default api;