// Shows the current authenticated user.
// Route: {apiBaseUrl}/users/me
// Method: Get
// Access: Protected
async function show(req, res) {
  const { user } = req;

  res.status(200).json(user);
}

module.exports = show;
