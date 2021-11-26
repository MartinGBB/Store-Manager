const { StatusCodes } = require('http-status-codes');
// const service = require('../../service/sales');

module.exports = async (req, res, next) => {
  try {
    // const { id } = req.params;
    //  res.status(status).json({ err: { message, status, code } }); 
    return res.status(StatusCodes.NOT_IMPLEMENTED).send();
  } catch (err) {
    next(err);
  }
};
