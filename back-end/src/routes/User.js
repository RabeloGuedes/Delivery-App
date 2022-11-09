const { Router } = require('express');

const route = Router();

const userController = require('../controllers/User');

route.get('/sellers', userController.getAllSellers);

module.exports = route;
