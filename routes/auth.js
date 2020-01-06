const auth = require('../controllers/auth/');
const passport = require('../middlewares/passport/');
const { authenticateUserValidator } = require('../middlewares/validation');

module.exports = router => {
  // Note: The order of the middlewares matters here,
  // we need to validate the body before passport can do its job.
  router.post('/auth', [authenticateUserValidator, passport('local')], auth);
};
