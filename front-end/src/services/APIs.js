import axios from 'axios';

const apiBase = axios.create({
  baseURL: 'http://localhost:3001',
});

const login = (email, password) => apiBase.post('/login', { email, password });

const create = ({ name, email, password }) => (
  apiBase.post('/register', { name, email, password }));

const getAllProducts = () => apiBase.get('/customer/products');

const getAllOrders = () => apiBase.get('/customer/orders');

const getSaleById = async (id) => apiBase.get(`/customer/orders/${id}`);

const createSale = async (sale, auth) => apiBase
  .post('/customer/orders', sale, { headers: auth });

export { login, create, getAllProducts, getAllOrders, createSale, getSaleById };
