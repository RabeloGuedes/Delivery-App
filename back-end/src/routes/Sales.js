const { Router } = require('express');
const SalesController = require('../controllers/Sales');
const verifyOrder = require('../middlewares/orderVerification');
const verifyToken = require('../middlewares/tokenValidation');

const route = Router();

route.post('/', verifyToken, verifyOrder, SalesController.create);
route.get('/', SalesController.getAll);
route.get('/:id', SalesController.getById);


module.exports = route;
