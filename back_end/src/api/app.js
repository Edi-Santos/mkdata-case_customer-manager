const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const Customer = require('../controller/Customer');

app.post('/customer', Customer.createCustomer);
app.get('/customer', Customer.getAllCustomers);
app.get('/customer/search', Customer.getCustomerByName);
app.put('/customer/:id', Customer.updateCustomer);
app.put('/customer/delete/:id', Customer.softDeleteCustomer);

module.exports = app;
