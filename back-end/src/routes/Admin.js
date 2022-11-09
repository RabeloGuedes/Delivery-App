const { Router } = require('express');

const routeAdmin = Router();

const { adminRegisterController } = require('../controllers/Register');
const userController = require('../controllers/User');

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

routeAdmin.get('/users', verifyToken, userController.getAllUsers);
routeAdmin.delete('/delete/user', verifyToken, userController.deleteUser);

module.exports = routeAdmin;
