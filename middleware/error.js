module.exports = (err, _req, res, _next) => {
  const { message, status, code } = err;
  if (status) return res.status(status).json({ err: { message, status, code } });
  return res.status(500).json(message);
};
