const Sales = require('../../model/document')('sales');
const Validation = require('../../middleware/validations/verifications');

const existId = async (id) => {
const findId = await Sales.findById(id);
const sales = await Validation.validIdSales(findId);
return sales;
};

const findById = async (id) => {
  const sales = await Sales.findById(id);
  const validateId = await existId(id);
  if (validateId.error) return validateId;
  return sales;
};

module.exports = findById;