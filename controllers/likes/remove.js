const { User } = require('../../models');

// Unlike a shop.
// Route: {apiBaseUrl}/users/me/likes
// Method: Delete
// Access: Protected
async function create(req, res) {
  const { id } = req.user;
  const { shopId } = req.body;

  await User.findByIdAndUpdate(id, {
    $pull: { shops: { shopId } },
  });

  res.status(301).json({ message: 'Successfully removed from liked shops' });
}

module.exports = create;
