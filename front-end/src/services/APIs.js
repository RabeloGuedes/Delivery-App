import axios from 'axios';

const apiBase = axios.create({
  baseURL: 'http://localhost:3002',
});

const login = (email, password) => apiBase.post('/login', { email, password });

export default login;
