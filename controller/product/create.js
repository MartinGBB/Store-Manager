const { StatusCodes } = require('http-status-codes');
const service = require('../../service/products');

module.exports = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;
    const newProduct = { name, quantity };
    const createProduct = await service.create(newProduct);
    
    if (createProduct.error) {
      const { error: { status, message, code } } = createProduct;
      return res.status(status).json({ err: { message, status, code } });
    }
    
    return res.status(StatusCodes.CREATED).send(newProduct);
  } catch (err) {
    next(err);
  }
};
