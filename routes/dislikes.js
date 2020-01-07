const { create, show } = require('../controllers/dislikes/');
const passport = require('../middlewares/passport/');

module.exports = router => {
  router
    .route('/users/me/dislikes')
    .all(passport('jwt'))
    .post(create)
    .get(show);
};
