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
    status: 422,
    code: 'invalid_data',
    message: 'Wrong id format',
  },
};

module.exports = {
  EXISTING_PRODUCT,
  NAME_LENGTH,
  INVALID_QUANTITY,
  INVALID_TYPE_OF_QUANTITY,
  ID_NOT_EXIST,
};