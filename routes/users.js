const { create, show } = require('../controllers/user/');
const { createUserValidator } = require('../middlewares/validation/');
const passport = require('../middlewares/passport/');

module.exports = router => {
  router.post('/users', createUserValidator, create);
  router.get('/users/me', passport('jwt'), show);
};
