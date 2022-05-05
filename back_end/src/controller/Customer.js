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

module.exports = {
  createCustomer,
};
