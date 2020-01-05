const { create } = require('../controllers/user/');
const { createUserValidator } = require('../middlewares/validation/');

module.exports = router => {
  router.post('/users', createUserValidator, create);
};
