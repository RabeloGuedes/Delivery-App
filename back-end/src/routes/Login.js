const { Router } = require('express');

const loginController = require('../controllers/Login');
const { verifyEmail, verifyPassword } = require('../middlewares/loginVerification')

const route = Router();

route.get('/', verifyEmail, verifyPassword, loginController);

module.exports = route;
