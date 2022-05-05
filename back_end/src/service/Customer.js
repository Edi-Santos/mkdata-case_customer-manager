const { Customer } = require('../../models');

const createCustomer = async (customerDatas) => {
  try {
    const creatingCustomer = await Customer.create(customerDatas);

    return creatingCustomer;
  } catch (error) {
    console.log(`Erro no Service || ${error}`);
  }
};

const getAllCustomers = async () => {
  try {
    const getingCustomers = await Customer.findAll();

    return getingCustomers;
  } catch (error) {
    console.log(`Erro no Service || ${error}`);
  }
};

module.exports = {
  createCustomer,
  getAllCustomers,
};
