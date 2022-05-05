const { Customer } = require('../../models');

const createCustomer = async (customerDatas) => {
  try {
    const creatingCustomer = await Customer.create(customerDatas);

    return creatingCustomer;
  } catch (error) {
    console.log(`Erro no Service || ${error}`);
  }
};

module.exports = {
  createCustomer,
};
