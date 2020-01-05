const jwt = require('jsonwebtoken');

// Exchanges the user's credentials with a JWT token.
// Route: {apiBaseUrl}/auth
// Method: Post
// Access: Public
module.exports = (req, res) => {
  const { id } = req.user;

  // TODO: as a future challenge, consider making the token temporary and revokable
  const token = jwt.sign({ sub: id }, process.env.JWT_SECRET);

  res.status(200).json({ token });
};
