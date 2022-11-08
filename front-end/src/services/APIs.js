import axios from 'axios';

const apiBase = axios.create({
  baseURL: 'http://localhost:3001',
});

const login = async (email, password) => apiBase.post('/login', { email, password });

const create = async ({ name, email, password }) => (
  apiBase.post('/register', { name, email, password }));

const getAllProducts = async () => apiBase.get('/customer/products');

const getAllOrders = async () => apiBase.get('/customer/orders');

const getOrdersByUserId = async () => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  return apiBase.get(
    '/customer/orders/all',
    { headers: { Authorization: token } },
  );
};

const getOrdersBySellerId = async () => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  return apiBase.get(
    '/seller/orders/all',
    { headers: { Authorization: token } },
  );
};

const isTheUserAuthenticated = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  try {
    if (user?.token) {
      return apiBase.get(
        '/login',
        { headers: { Authorization: user.token } },
      );
    } return null;
  } catch (error) {
    return null;
  }
};

const getSaleById = async (id) => apiBase.get(`/customer/orders/${id}`);

const updateStatus = async (id, status) => apiBase
  .patch(`/customer/orders/${id}`, { status });

const createSale = async (sale, auth) => apiBase
  .post('/customer/orders', sale, { headers: auth });

export {
  login,
  create,
  getAllProducts,
  getAllOrders,
  createSale,
  getSaleById,
  getOrdersByUserId,
  getOrdersBySellerId,
  isTheUserAuthenticated,
  updateStatus,
};
