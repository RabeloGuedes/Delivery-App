import axios from 'axios';

const apiBase = axios.create({
  baseURL: 'http://localhost:3001',
});

const login = async (email, password) => apiBase.post('/login', { email, password });

const create = async ({ name, email, password }) => (
  apiBase.post('/register', { name, email, password }));

const getAllProducts = async () => apiBase.get('/customer/products');

const getAllOrders = async () => apiBase.get('/customer/orders');

// const getOrdersById = async () => apiBase.get('/customer/orders/${id}');

const getSaleById = async (id) => apiBase.get(`/customer/orders/${id}`);

const createSale = async (sale, auth) => apiBase
  .post('/customer/orders', sale, { headers: auth });

export { login, create, getAllProducts, getAllOrders, createSale, getSaleById };
