const { Router } = require('express');

const registerController = require('../controllers/Register');
const { verifyEmail, verifyPassword, verifyName } = require('../middlewares/loginVerification');

const route = Router();

route.post('/', verifyEmail, verifyPassword, verifyName, registerController);

module.exports = route;
