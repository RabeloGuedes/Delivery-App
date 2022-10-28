const { Router } = require('express');
const loginController = require('../controllers/Login');
const { verifyEmail, verifyPassword } = require('../middlewares/loginVerification');
const verifyToken = require('../middlewares/tokenValidation');

const route = Router();

route.get('/', verifyEmail, verifyPassword, verifyToken, loginController);

module.exports = route;
