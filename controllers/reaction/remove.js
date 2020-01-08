const { Reaction } = require('../../models/');

// Delete a reaction.
// Route: {apiBaseUrl}/reactions
// Method: Delete
// Access: Protected
async function create(req, res) {
  const { id: userId } = req.user;
  const { shopId } = req.body;

  await Reaction.findOneAndDelete({
    userId,
    shopId,
  }).exec();

  res.status(204).send();
}

module.exports = create;
