const schema = require('./customerDatasSchema');

const customerDatasValidations = (customerDatas) => {
  const { error } = schema.validate(customerDatas);

  if (error) {
    const { message } = error.details[0];
    return { status: 400, message };
  }

  return true;
};

module.exports = customerDatasValidations;
