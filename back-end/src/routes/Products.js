const { Router } = require('express');
const productsController = require('../controllers/Products');

const route = Router();

route.get('/', productsController);

module.exports = route;
