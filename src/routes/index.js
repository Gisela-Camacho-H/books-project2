const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/books', require('./books'))
router.use('/users', require('./users'))
router.use('/profile', require('./profile'))


module.exports = router;