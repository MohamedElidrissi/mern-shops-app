const { Reaction } = require('../../models/');

// Show reactions.
// Route: {apiBaseUrl}/reactions
// Method: Get
// Access: Protected
async function create(req, res) {
  const { id: userId } = req.user;
  const { type } = req.query;

  const reactions = await Reaction.find({ userId })
    .where('type')
    .equals(type)
    .populate({ path: 'shop', select: 'name picture' })
    .select({ shopId: 1, shop: 1, type: 1 })
    .exec();

  res.status(200).json(reactions);
}

module.exports = create;
