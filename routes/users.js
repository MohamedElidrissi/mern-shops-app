const { create } = require('../controllers/user/');

module.exports = router => {
  router.post('/users', create);
};
