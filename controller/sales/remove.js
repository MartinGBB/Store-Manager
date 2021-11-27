const { StatusCodes } = require('http-status-codes');
const service = require('../../service/sales');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const itensSold = await service.remove(id);

    if (itensSold.error) {
      const { error: { status, message, code } } = itensSold;
      return res.status(status).json({ err: { code, message } }); 
    }
    
    return res.status(StatusCodes.OK).json(itensSold);
  } catch (err) {
    next(err);
  }
};
