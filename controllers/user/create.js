const bcrypt = require('bcrypt');

const { User } = require('../../models/');

// Creates a new user.
// Route: {apiBaseUrl}/users
// Method: Post
// Access: Public
async function create(req, res) {
  const { username, email, password } = req.body;

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({ username, email, password: hashedPassword });

  user.set('password', undefined);

  res.status(201).json(user);
}

module.exports = create;
