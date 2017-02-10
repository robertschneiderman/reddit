const authController = require('../controllers').auth;
const redditController = require('../controllers').reddit;
const starController = require('../controllers').star;

const passportService = require('../services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the auth API!',
  }));

  app.get('/api/reddits', redditController.get);

  app.get('/api/stars', starController.get);
  app.post('/api/stars', starController.create);
  app.delete('/api/stars/:redditId', starController.delete);

  app.post('/signup', authController.signup);
  app.post('/signin', requireSignIn, authController.signin);
};