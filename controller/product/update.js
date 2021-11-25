const { StatusCodes } = require('http-status-codes');
const service = require('../../service/products');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const productUpdate = { name, quantity, id };
    
      const product = await service.update(productUpdate);
      console.log(product.error);

      if (product.error) {
        const { error: { status, message, code } } = product;
        return res.status(status).json({ err: { status, message, code } });
      }

    return res.status(StatusCodes.OK).json(product);
  } catch (err) {
    next(err);
  }
};
