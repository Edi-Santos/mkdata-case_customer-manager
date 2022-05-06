const { Op } = require('sequelize');
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

const getCustomerByName = async (nome) => {
  const search = `%${nome}%`;

  try {
    const getingCustomer = await Customer.findAll({ where: {
      nome: {
        [Op.like]: search,
      },
    } });

    return getingCustomer;
  } catch (error) {
    console.log(`Erro no Service || ${error}`);
  }
};

const updateCustomer = async (id, customerDatas) => {
  // eslint-disable-next-line camelcase
  const { nome, tipo, 'CPF/CNPJ': cpf_cnpj, RG, grupo } = customerDatas;

  try {
    await Customer.update(
      // eslint-disable-next-line camelcase
      { nome, tipo, cpf_cnpj, RG, grupo },
      { where: { id } },
    );
  } catch (error) {
    console.log(`Erro no Service || ${error}`);
  }
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerByName,
  updateCustomer,
};
