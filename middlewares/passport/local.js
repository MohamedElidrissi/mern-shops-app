const { Strategy } = require('passport-local');
const bcrypt = require('bcrypt');

const { User } = require('../../models/');

const options = {
  usernameField: 'email',
  passwordField: 'password',
};
const strategy = new Strategy(options, async (email, password, done) => {
  const user = await User.findOne({ email });

  if (!user) {
    return done(new Error(`No user is associated with email ${email}`));
  }

  const same = await bcrypt.compare(password, user.password);

  if (same) {
    user.set('password', undefined);
    done(null, user);
  } else {
    done({
      statusCode: 401,
      message: 'Invalid password',
    });
  }
});

module.exports = strategy;
