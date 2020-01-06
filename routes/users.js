const { create, show } = require('../controllers/user/');
const { createUserValidator } = require('../middlewares/validation/');
const passport = require('../middlewares/passport/');
const asyncRouteHandler = require('../utils/asyncRouteHandler');

module.exports = router => {
  router.post('/users', createUserValidator, asyncRouteHandler(create));
  router.get('/users/me', passport('jwt'), show);
};
