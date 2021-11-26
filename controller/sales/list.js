const { StatusCodes } = require('http-status-codes');
const service = require('../../service/sales');

module.exports = async (req, res, next) => {
  try {
    const sales = await service.find();

    res.status(StatusCodes.OK).send({ sales });
  } catch (err) {
    next(err);
  }
};
