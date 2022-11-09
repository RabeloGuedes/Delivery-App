const { Router } = require('express');

const routeAdmin = Router();

const { adminRegisterController } = require('../controllers/Register');
const {
  verifyEmail,
  verifyPassword,
  verifyName,
  verifyRole,
} = require('../middlewares/loginVerification');
const verifyToken = require('../middlewares/tokenValidation');

routeAdmin.post('/register',
verifyToken,
verifyEmail,
verifyPassword,
verifyName,
verifyRole,
adminRegisterController);

module.exports = routeAdmin;
