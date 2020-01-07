const { User } = require('../../models/');

// Get the user's preferred shops.
// Route: {apiBaseUrl}/users/me/likes
// Method: Get
// Access: Protected
async function show(req, res) {
  const { id } = req.user;

  const user = await User.findById(id, { _id: 0, shops: 1 });

  const likedShops = user.shops.filter(shop => shop.status === 'liked');

  res.status(200).json(likedShops);
}

module.exports = show;
