const { Router } = require('express');
const SalesController = require('../controllers/Sales');

const route = Router();

route.post('/', SalesController.create);

module.exports = route;
