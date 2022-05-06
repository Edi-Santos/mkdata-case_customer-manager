const { userNotFound } = require('./errorMessage');

const customerNotFound = (customer) => {
  if (customer.length < 1 || customer === null || !customer) {
    return userNotFound;
  }

  return true;
};

module.exports = customerNotFound;
