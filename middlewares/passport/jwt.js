const { Strategy, ExtractJwt } = require('passport-jwt');

const { User } = require('../../models/');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};
const strategy = new Strategy(options, async (payload, done) => {
  const user = await User.findById(payload.sub);

  if (user) {
    delete user.password;
    done(null, user);
  } else {
    done({
      statusCode: 401,
      message: 'Authorization failed',
    });
  }
});

module.exports = strategy;
