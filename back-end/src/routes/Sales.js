const { Router } = require('express');
const SalesController = require('../controllers/Sales');
const verifyOrder = require('../middlewares/orderVerification');

const route = Router();

route.post('/', verifyOrder, SalesController.create);
route.get('/', SalesController.getAll);

module.exports = route;
