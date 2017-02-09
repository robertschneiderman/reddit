const authController = require('../controllers').auth;


const passportService = require('../services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the auth API!',
  }));

  app.post('/api/signup', authController.signup);
  app.post('/api/signin', requireSignIn, authController.signin);
};