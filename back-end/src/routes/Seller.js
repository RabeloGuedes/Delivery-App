const { Router } = require('express');
const SalesController = require('../controllers/Sales');
const verifyToken = require('../middlewares/tokenValidation');

const route = Router();

route.get('/all',
verifyToken,
SalesController.getSalesBySellerId);

route.get('/:id', SalesController.getById);

module.exports = route;
