const { Router } = require('express');
const SalesController = require('../controllers/Sales');
const { 
  verifySellerId,
  verifyTotalPrice,
  verifyDeliveryAdress,
  verifyDeliveryNumber,
  verifyCart,
} = require('../middlewares/orderVerification');
const verifyToken = require('../middlewares/tokenValidation');

const route = Router();

route.post(
'/', 
verifyToken,
verifySellerId,
verifyTotalPrice,
verifyDeliveryAdress,
verifyDeliveryNumber,
verifyCart, 
SalesController.create,
);
route.get('/', SalesController.getAll);
route.get('/all',
verifyToken,

SalesController.getSalesByUserId
);
route.get('/:id', SalesController.getById);

module.exports = route;
