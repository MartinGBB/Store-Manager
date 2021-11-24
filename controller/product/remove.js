const { StatusCodes } = require('http-status-codes');

module.exports = async (req, res, next) => {
  try {
    return res.status(StatusCodes.NOT_IMPLEMENTED).end();
  } catch (err) {
    next(err);
  }
};
