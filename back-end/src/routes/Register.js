const { Router } = require('express');

const registerController = require('../controllers/Register');
const { verifyEmail, verifyPassword } = require('../middlewares/loginVerification');

const route = Router();

route.post('/', verifyEmail, verifyPassword, registerController);

module.exports = route;
