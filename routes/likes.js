const { create, show, remove } = require('../controllers/likes/');
const passport = require('../middlewares/passport/');

module.exports = router => {
  router
    .route('/users/me/likes')
    .all(passport('jwt'))
    .post(create)
    .get(show)
    .delete(remove);
};
