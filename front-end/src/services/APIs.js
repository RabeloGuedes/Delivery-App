import axios from 'axios';

const apiBase = axios.create({
  baseURL: 'http://localhost:3001',
});

const login = (email, password) => apiBase.post('/login', { email, password });

export default login;
