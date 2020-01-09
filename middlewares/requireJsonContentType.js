module.exports = (req, res, next) => {
  if (req.header('Content-Type') !== 'application/json') {
    return res.status(415).json({ message: 'Unsupported Content-Type' });
  }

  next();
};
