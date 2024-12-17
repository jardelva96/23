import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8002/api' // Ajuste a porta se necessário
});

export default api;
