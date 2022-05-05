const Customer = require('../service/Customer');

const createCustomer = async (req, res) => {
  const customerDatas = req.body;

  try {
    const creatingCustomer = await Customer.createCustomer(customerDatas);
  
    return res.status(201).json({ newCustomer: creatingCustomer });
  } catch (error) {
    console.log(`Erro no Controller || ${error}`);
  }
};

const getAllCustomers = async (_req, res) => {
  try {
    const getingCustomers = await Customer.getAllCustomers();

    return res.status(200).json({ custmers: getingCustomers });
  } catch (error) {
    console.log(`Erro no Controller || ${error}`);
  }
};

module.exports = {
  createCustomer,
  getAllCustomers,
};
