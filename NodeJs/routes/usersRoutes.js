const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Ruta para iniciar sesión
router.post('/login', usersController.login);

// Ruta para registrar un nuevo usuario
router.post('/create', usersController.register);


module.exports = router;