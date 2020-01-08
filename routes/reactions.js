const { create, show, remove } = require('../controllers/reaction/');
const {
  createReactionValidator,
  getReactionsValidator,
  deleteReactionSchema,
} = require('../middlewares/validation/');
const passport = require('../middlewares/passport/');
const asyncRouteHandler = require('../utils/asyncRouteHandler');

module.exports = router => {
  router
    .route('/reactions')
    .all(passport('jwt'))
    .post(createReactionValidator, asyncRouteHandler(create))
    .get(getReactionsValidator, show)
    .delete(deleteReactionSchema, remove);
};
