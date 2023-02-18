const router = require('express').Router();
const profileController = require('../controllers/profile');

router.get('/', profileController.requiresAuth(), profileController.getProfile);

module.exports = router;