import axios from "axios";

// Configuração do Axios
const api = axios.create({
  baseURL: "http://localhost:8000/api", // Altere conforme necessário
});

// Adiciona o token JWT automaticamente no cabeçalho Authorization
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Obtém o token do localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Adiciona o token no cabeçalho
  }
  return config;
});

export default api;
