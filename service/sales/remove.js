const { ObjectId } = require('mongodb');
const { INVALID_ID_FORMAT } = require('../../middleware/errorsStatus');
const Sales = require('../../model/document')('sales');
const Validation = require('../../middleware/validations/verifications');

const existId = async (id) => {
  console.log('id', id);

  const findId = await Sales.findById(id);
  console.log('q', findId);
  const validate = await Validation.deleteId(findId);
  return validate;
};

const remove = async (itensSold) => {
  const objectId = ObjectId.isValid(itensSold);

  if (!objectId) return INVALID_ID_FORMAT;

  const validateId = await existId(itensSold);

  const salesDelete = await Sales.remove(itensSold);
  return validateId.error ? validateId : salesDelete;
};

module.exports = remove;
