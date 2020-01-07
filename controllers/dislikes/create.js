const { User } = require('../../models');

async function create(req, res) {
  const { id } = req.user;
  const { shopId } = req.body;

  await User.findByIdAndUpdate(id, {
    $push: { shops: { shopId, status: 'disliked' } },
  });

  res.status(201).json({ message: 'Successfully added to disliked shops' });
}

module.exports = create;
