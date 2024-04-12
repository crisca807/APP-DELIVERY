const Reserva = require('../models/Reserva');

exports.createReserva = (req, res) => {
  // Extraer datos de la solicitud
  const { placa, tipoVehiculo } = req.body;

  // Capturar el tiempo actual
  const horaReserva = new Date();

  // Verificar que se proporcionen todos los datos necesarios
  if (!placa || !tipoVehiculo) {
    return res.status(400).json({ error: 'Por favor, proporcione todos los campos necesarios.' });
  }

  // Crear un objeto con los datos de la reserva
  const nuevaReserva = {
    placa,
    tipoVehiculo,
    horaReserva
  };

  // Llamar a la función del modelo para crear una nueva reserva
  Reserva.create(nuevaReserva, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error al crear la reserva.');
    }
    res.json({ message: 'Reserva creada exitosamente', id: result.insertId });
  });
};