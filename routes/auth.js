const auth = require('../controllers/auth/');

const passport = require('../middlewares/passport/');

module.exports = router => {
  router.post('/auth', passport('local'), auth);
};
