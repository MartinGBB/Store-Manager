const Sales = require('../../model/document')('sales');

const find = async () => {
  const sales = await Sales.find();
  return sales;
};

module.exports = find;