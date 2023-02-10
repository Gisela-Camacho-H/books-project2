const express = require('express');
const router = express.Router();

const gamesController = require('../controllers/books');
const validation = require('../middleware/validate');

router.get('/', gamesController.getAll);

router.get('/:id', gamesController.getSingle);

router.post('/', validation.saveBook , gamesController.createBooks);

router.put('/:id', validation.saveBook ,gamesController.updateBooks);

router.delete('/:id', gamesController.deleteBooks);

module.exports = router;