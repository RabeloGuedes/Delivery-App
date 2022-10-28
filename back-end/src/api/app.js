const express = require('express');

const routeRegister = require('../routes/Register');
const routeLogin = require('../routes/Login');

const app = express();
app.use(express.json());

app.use('/login', routeLogin);
app.use('/register', routeRegister);

module.exports = app;
