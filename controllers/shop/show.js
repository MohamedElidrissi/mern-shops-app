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
