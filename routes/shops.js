const { show } = require('../controllers/shop/');
const { getAllShopsValidator } = require('../middlewares/validation/');

module.exports = router => {
  router.get('/shops', getAllShopsValidator, show);
};
