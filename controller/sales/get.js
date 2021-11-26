const { StatusCodes } = require('http-status-codes');
const service = require('../../service/sales');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sales = await service.findById(id);
    if (sales.error) {
      const { error: { status, message, code } } = sales;
      res.status(status).json({ err: { code, message } }); 
    }
    return res.status(StatusCodes.OK).json({ sales });
  } catch (err) {
    next(err);
  }
};
