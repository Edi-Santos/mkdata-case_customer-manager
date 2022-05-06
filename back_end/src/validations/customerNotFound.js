const { userNotFound } = require('./errorMessage');

const customerNotFound = (customer) => {
  if (customer.length < 1 || customer[0] === 0 || !customer) {
    return userNotFound;
  }

  return true;
};

module.exports = customerNotFound;
