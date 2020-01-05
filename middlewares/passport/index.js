const passport = require('passport');

const jwtStrategy = require('./jwt');
const localStrategy = require('./local');

passport.use(jwtStrategy);
passport.use(localStrategy);

module.exports = strategy =>
  passport.authenticate(strategy, { session: false });
