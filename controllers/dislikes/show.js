const { User } = require('../../models/');

async function show(req, res) {
  const { id } = req.user;

  const user = await User.findById(id, { _id: 0, shops: 1 });

  const dislikedShops = user.shops.filter(shop => shop.status === 'disliked');

  res.status(200).json(dislikedShops);
}

module.exports = show;
