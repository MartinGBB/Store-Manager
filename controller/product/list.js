const { StatusCodes } = require('http-status-codes');
const service = require('../../service/products');

module.exports = async (_req, res, next) => {
  try {
    const products = await service.find();
    return res.status(StatusCodes.OK).json({ products });
  } catch (err) {
    next(err);
  }
};
