const { show } = require('../controllers/shop/');
const { getAllShopsValidator } = require('../middlewares/validation/');
const passport = require('../middlewares/passport/');

module.exports = router => {
  router.get('/shops', [getAllShopsValidator, passport('jwt')], show);
};
