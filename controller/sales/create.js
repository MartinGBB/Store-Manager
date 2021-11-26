const { StatusCodes } = require('http-status-codes');
const service = require('../../service/sales');

module.exports = async (req, res, next) => {
  try {
    const newSales = req.body; 
    const createSales = await service.create(newSales);

    if (createSales.error) {
      const { error: { status, message, code } } = createSales;
       return res.status(status).json({ err: { code, message } });
    }
    return res.status(StatusCodes.OK).json(...createSales.ops);
  } catch (err) {
    next(err);
  }
};
