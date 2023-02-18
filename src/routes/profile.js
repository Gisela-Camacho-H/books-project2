const router = require('express').Router();
const booksController = require('../controllers/profile');

router.use(booksController.auth(booksController.config));
router.get('/', booksController.isUserAuthenticaded);

router.get('/profile', booksController.requiresAuth(), booksController.getProfile);

module.exports = router;