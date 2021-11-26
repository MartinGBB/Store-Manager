const Sales = require('../../model/document')('sales');
const Validation = require('../../middleware/validations/verifications');

const validateQuantity = async (quantity) => {
  const validate = await Validation.salesQuantity(quantity);
  return validate;
};

const update = async (itensSold) => {
  const sales = await Sales.update({ itensSold });
  const validate = await validateQuantity(itensSold.quantity);
  console.log(validate);
  if (validate.error) return validate;
  return sales;
};

module.exports = update;
