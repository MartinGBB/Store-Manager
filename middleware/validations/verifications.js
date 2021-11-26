const err = require('../errorsStatus');

const QUANTITY_MIN_LENGTH = 1;

const existingProduct = async (productName) => {
  if (productName) return err.EXISTING_PRODUCT;
  return true;
};

const nameLength = async (name) => {
  const NAME_MIN_LENGTH = 5;
  if (typeof name !== 'string' || name.length < NAME_MIN_LENGTH) {
    return err.NAME_LENGTH;
  }
  return true;
};

const minQuantity = async (quantity) => {
  if (quantity < QUANTITY_MIN_LENGTH) return err.INVALID_QUANTITY;
  return true;
};

const typeOfQuantity = async (quantity) => {
  if (typeof quantity !== 'number') {
    return err.INVALID_TYPE_OF_QUANTITY;
  }
  return true;
};

// findbyId
const findFail = async (product) => {
  if (!product) return err.ID_NOT_EXIST;
  return true;
};

// sales
const invalidQuantity = async (productQuantity) => {
  const listSales = await productQuantity.map(({ quantity }) => {
    if (quantity < QUANTITY_MIN_LENGTH || typeof quantity !== 'number') return false;
    return true;
  });

  const filter = listSales.filter((list) => list === false);
  return filter.length >= 1 ? err.QUANTITY_SALES : true;
};

const validIdSales = async (sales) => {
  if (!sales) return err.INVALID_ID;
  return true;
};

module.exports = {
  existingProduct,
  nameLength,
  minQuantity,
  typeOfQuantity,
  // findById
  findFail,
  invalidQuantity,
  validIdSales,
};
