const { Shop, User } = require('../../models/');

// Show non-liked shops sorted by distance from a given longitude and latitude.
// Route: {apiBaseUrl}/shops
// Method: Get
// Access: Protected
async function show(req, res) {
  const { long, lat, page, per_page } = req.query;
  const { id } = req.user;

  const user = await User.findById(id, { _id: 0, shops: 1 });

  const userLikedShops = user.shops
    .filter(shop => shop.status === 'disliked')
    .map(shop => shop.shopId);

  const [totalCount, shops] = await Promise.all([
    Shop.estimatedDocumentCount().exec(),
    Shop.find()
      .skip((page - 1) * per_page)
      .limit(per_page)
      .near('location', {
        center: [parseFloat(long), parseFloat(lat)],
        spherical: true,
      })
      .where('_id')
      .nin(userLikedShops)
      .exec(),
  ]);

  // Setup the Link pagination header
  // TODO: this is kinda messy
  const { protocol, hostname, path } = req;
  const url = `${protocol}://${hostname}:${process.env.PORT}/api/v1${path}?per_page=${per_page}&long=${long}&lat=${lat}`;
  const lastPage = Math.ceil(totalCount / per_page);

  const links = {
    last: `${url}?page=${lastPage}`,
  };

  if (page < lastPage) {
    Object.assign(links, {
      next: `${url}?page=${page + 1}`,
    });
  }

  res.links(links);
  res.setHeader('X-Total-Count', totalCount);
  res.status(200).json(shops);
}

module.exports = show;
