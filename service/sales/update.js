const Sales = require('../../model/document')('sales');
const Validation = require('../../middleware/validations/verifications');

const validateQuantity = async (sales) => {
  const validate = await Validation.invalidQuantity(sales);
  return validate;
};

const update = async (itensSold, id) => {
  const sales = { itensSold, _id: id };
  
  const validate = await validateQuantity(itensSold);
  if (validate.error) return validate;
  const updateSales = await Sales.update(sales);
  return updateSales;
};

module.exports = update;
