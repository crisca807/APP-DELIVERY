const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

// Ruta para crear una nueva reserva
router.post('/', reservaController.createReserva);

module.exports = router;