const passport = require('passport');
const User = require('../models').User;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const config = require('../environment');

const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy({ usernameField: 'email' }, function(email, password, done) {
  User.findOne({where: {email: email}}).then((user) => {
    user.comparePasswords(password, user.password, function(err, isMatch) {
      if (err) { return done(null, false); }
      if (!isMatch) { return done(null, false); }

      return done(null, user);
    });
  }).catch(err => {
    console.log(err);
  });  
});


const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('x-auth'),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  User.findById(payload.sub, function(err, user) {
    if(err) { return done(err, false); }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
passport.use(localLogin);