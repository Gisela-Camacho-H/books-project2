const router = require('express').Router();
const profileController = require('../controllers/profile');

router.use(profileController.auth(booksController.config));
router.get('/', profileController.isUserAuthenticaded);

router.get('/profile', profileController.requiresAuth(), booksController.getProfile);

module.exports = router;