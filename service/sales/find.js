const Sales = require('../../model/document')('sales');

const find = async () => {
  const sales = Sales.find();
  return sales;
};

module.exports = find;