const { create } = require('../controllers/likes/');
const passport = require('../middlewares/passport/');

module.exports = router => {
  router
    .route('/users/me/likes')
    .all(passport('jwt'))
    .post(create);
};
