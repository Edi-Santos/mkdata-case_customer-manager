const Customer = require('../service/Customer');

const createCustomer = async (req, res) => {
  const customerDatas = req.body;

  try {
    const creatingCustomer = await Customer.createCustomer(customerDatas);

    if (creatingCustomer.message) {
      const { status, message } = creatingCustomer;

      return res.status(status).json({ message });
    }
  
    return res.status(201).json({ newCustomer: creatingCustomer });
  } catch (error) {
    console.log(`Erro no Controller || ${error}`);
  }
};

const getAllCustomers = async (_req, res) => {
  try {
    const getingCustomers = await Customer.getAllCustomers();

    return res.status(200).json({ customers: getingCustomers });
  } catch (error) {
    console.log(`Erro no Controller || ${error}`);
  }
};

const getCustomerByName = async (req, res) => {
  const { nome } = req.query;

  try {
    const getingCustomer = await Customer.getCustomerByName(nome);

    if (getingCustomer.message) {
      const { status, message } = getingCustomer;

      return res.status(status).json({ message });
    }

    return res.status(200).json({ customer: getingCustomer });
  } catch (error) {
    console.log(`Erro no Controller || ${error}`);
  }
};

const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const customerDatas = req.body;

  try {
    const updatingCustomer = await Customer.updateCustomer(id, customerDatas);

    if (updatingCustomer.message) {
      const { status, message } = updatingCustomer;

      return res.status(status).json({ message });
    }

    return res.status(204).end();
  } catch (error) {
    console.log(`Erro no Controller || ${error}`);
  }
};

const softDeleteCustomer = async (req, res) => {
  const { id } = req.params;
  const { ativo } = req.body;

  try {
    const deletingCustomer = await Customer.softDeleteCustomer(id, ativo);

    if (deletingCustomer.message) {
      const { status, message } = deletingCustomer;

      return res.status(status).json({ message });
    }

    return res.status(204).end();
  } catch (error) {
    console.log(`Erro no Controller || ${error}`);
  }
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerByName,
  updateCustomer,
  softDeleteCustomer,
};
