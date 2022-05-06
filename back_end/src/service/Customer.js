const { Op } = require('sequelize');
const { Customer } = require('../../models');

const customerDatasValidations = require('../validations/validations');

const createCustomer = async (customerDatas) => {
  try {
    const validatingDatas = customerDatasValidations(customerDatas);

    if (validatingDatas !== true) return validatingDatas;

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
  try {
    const validatingDatas = customerDatasValidations(customerDatas);

    if (validatingDatas !== true) return validatingDatas;

    await Customer.update(
      { ...customerDatas },
      { where: { id } },
    );

    return true;
  } catch (error) {
    console.log(`Erro no Service || ${error}`);
  }
};

const softDeleteCustomer = async (id, ativo) => {
  try {
    await Customer.update(
      { ativo },
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
  softDeleteCustomer,
};
