const router = require('express').Router();
const profileController = require('../controllers/profile');

router.get('/profile', profileController.requiresAuth(), profileController.getProfile);

module.exports = router;