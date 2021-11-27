const Sales = require('../../model/document')('sales');
const Validation = require('../../middleware/validations/verifications');

const existId = async (salesId) => {
  console.log('id', salesId);

  const findId = await Sales.findById(salesId);
  console.log('q', findId);
  const validate = await Validation.deleteId(findId);
  return validate;
};

const remove = async (itensSold) => {
  const salesDelete = await Sales.remove(itensSold);
  const validateId = await existId(itensSold);
  return validateId.error ? validateId : salesDelete;
};

module.exports = remove;
