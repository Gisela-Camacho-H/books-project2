const express = require('express');
const router = express.Router();

const gamesController = require('../controllers/users');
const validation = require('../middleware/validate');

router.get('/', gamesController.getAll);

router.get('/:id', gamesController.getSingle);

router.post('/', validation.saveUser,  gamesController.createUsers);

router.put('/:id', validation.saveUser, gamesController.updateUsers);

router.delete('/:id', gamesController.deleteUsers);

module.exports = router;