const express = require('express');
const router = express.Router();

const gamesController = require('../controllers/users');

router.get('/', gamesController.getAll);

router.get('/:id', gamesController.getSingle);

router.post('/', gamesController.createUsers);

router.put('/:id', gamesController.updateUsers);

router.delete('/:id', gamesController.deleteUsers);

module.exports = router;