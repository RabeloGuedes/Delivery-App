const express = require('express');
const cors = require('cors');

const routeRegister = require('../routes/Register');
const routeLogin = require('../routes/Login');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/login', routeLogin);
app.use('/register', routeRegister);

module.exports = app;
