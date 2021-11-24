const { StatusCodes } = require('http-status-codes');
const service = require('../../service/products');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findById(id);
    
    if (product.error) {
      const { error: { status, message, code } } = product;
      return res.status(status).json({ err: { status, message, code } });
    }
    return res.status(StatusCodes.OK).send(product);
  } catch (err) {
    next(err);
  }
};
