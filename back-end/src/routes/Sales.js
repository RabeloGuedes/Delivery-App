const { Router } = require('express');
const SalesController = require('../controllers/Sales');

const route = Router();

route.post('/', SalesController.create);
route.get('/', SalesController.getAll);

module.exports = route;
