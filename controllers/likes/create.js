const { User } = require('../../models');

// Like a shop.
// Route: {apiBaseUrl}/users/me/likes
// Method: Post
// Access: Protected
async function create(req, res) {
  const { id } = req.user;
  const { shopId } = req.body;

  await User.findByIdAndUpdate(id, {
    $push: { shops: { shopId, status: 'liked' } },
  });

  res.status(201).json({ message: 'Successfully added to liked shops' });
}

module.exports = create;
