const { Router } = require('express');
const loginController = require('../controllers/Login');
const { verifyEmail, verifyPassword } = require('../middlewares/loginVerification');
const verifyToken = require('../middlewares/tokenValidation');

const route = Router();

route.post('/', verifyToken, verifyEmail, verifyPassword, loginController);

module.exports = route;
