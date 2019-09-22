/* const { Router } = require('express');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');
const {ExtractJwt} = passportJWT;
const JwtStrategy = passportJWT.Strategy;


const router = new Router();
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, ((jwt_payload, done) => {
  User.findOne({ id: jwt_payload.sub }, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    }
    return done(null, false);
    // or you could create a new account
  });
})));

router.route('/login')
  .post(createOne);

router.route('/sign_in')
  .get(findOneById);


module.exports = router; */
