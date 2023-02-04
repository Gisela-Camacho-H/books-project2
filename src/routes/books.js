const express = require('express');
const router = express.Router();

const gamesController = require('../controllers/books');

router.get('/', gamesController.getAll);

router.get('/:id', gamesController.getSingle);

router.post('/', gamesController.createBooks);

router.put('/:id', gamesController.updateBooks);

router.delete('/:id', gamesController.deleteBooks);

module.exports = router;