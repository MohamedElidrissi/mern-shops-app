const { Reaction } = require('../../models/');

// Create a reaction.
// Route: {apiBaseUrl}/reactions
// Method: Post
// Access: Protected
async function create(req, res) {
  const { id: userId } = req.user;
  const { shopId, type } = req.body;

  const reaction = await Reaction.create({ userId, shopId, type });

  res.status(201).json(reaction);
}

module.exports = create;
