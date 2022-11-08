const express = require('express');
const cors = require('cors');

const routeRegister = require('../routes/Register');
const routeLogin = require('../routes/Login');
const routeProducts = require('../routes/Products');
const routeSales = require('../routes/Sales');

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static('public'));
app.use('/login', routeLogin);
app.use('/register', routeRegister);
app.use('/customer/products', routeProducts);
app.use('/customer/orders', routeSales);

module.exports = app;
