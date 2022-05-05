const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const Customer = require('../controller/Customer');

app.post('/customer', Customer.createCustomer);

module.exports = app;
