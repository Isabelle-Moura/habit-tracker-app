import axios from "axios";

// Cria uma instância do axios com configurações padrão
const api = axios.create({
  baseURL: "http://127.0.0.1:5000", // URL base do seu backend
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
      console.error("Erro na requisição:", error.response?.data || error.message);
      return Promise.reject(error);
    }
  );
  
  export default api;