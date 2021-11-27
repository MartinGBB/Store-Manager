const Sales = require('../../model/document')('sales');
const Verifications = require('../../middleware/validations/verifications');

const validQuantity = async (quantity) => {
  const quantityLength = await Verifications.invalidQuantity(quantity);
  return quantityLength;
};

const create = async (itensSold) => {
  const quantity = await validQuantity(itensSold);
  if (quantity.error) return quantity;
  const salesProduct = await Sales.create({ itensSold });
  
  return salesProduct;
};

module.exports = create;
