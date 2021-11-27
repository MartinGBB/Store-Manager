const { StatusCodes } = require('http-status-codes');

const EXISTING_PRODUCT = {
  error: {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    message: 'Product already exists',
    code: 'invalid_data',
  },
};

const NAME_LENGTH = {
  error: {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    code: 'invalid_data',
    message: '"name" length must be at least 5 characters long',
  },
};

const INVALID_QUANTITY = {
  error: {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    code: 'invalid_data',
    message: '"quantity" must be larger than or equal to 1',
  },
};

const INVALID_TYPE_OF_QUANTITY = {
  error: {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    code: 'invalid_data',
    message: '"quantity" must be a number',
  },
};

const ID_NOT_EXIST = {
  error: {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    code: 'invalid_data',
    message: 'Wrong id format',
  },
};

const QUANTITY_SALES = {
  error: {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    code: 'invalid_data',
    message: 'Wrong product ID or invalid quantity',
  },
};

 const INVALID_ID = {
  error: {
    status: StatusCodes.NOT_FOUND,
    code: 'not_found',
    message: 'Sale not found',
  },
 };

 const INVALID_ID_FORMAT = {
  error: {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    code: 'invalid_data',
    message: 'Wrong sale ID format',
  },
 };

module.exports = {
  EXISTING_PRODUCT,
  NAME_LENGTH,
  INVALID_QUANTITY,
  INVALID_TYPE_OF_QUANTITY,
  ID_NOT_EXIST,
  QUANTITY_SALES,
  INVALID_ID,
  INVALID_ID_FORMAT,
};