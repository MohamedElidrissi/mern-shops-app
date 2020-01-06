const { Shop } = require('../../models/');

// Show all shops sorted by distance from a given longitude and latitude.
// Route: {apiBaseUrl}/shops
// Method: Get
// Access: Public
async function show(req, res) {
  const { long, lat, page, per_page } = req.query;

  const [totalCount, shops] = await Promise.all([
    Shop.estimatedDocumentCount().exec(),
    Shop.find()
      .skip((page - 1) * per_page)
      .limit(per_page)
      .near('location', {
        center: [parseFloat(long), parseFloat(lat)],
        spherical: true,
      })
      .exec(),
  ]);

  res.setHeader('X-Total-Count', totalCount);
  res.status(200).json(shops);
}

module.exports = show;
