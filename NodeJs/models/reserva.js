const db = require('../config/config');

const Reserva = {};

Reserva.create = (reserva, result) => {
    const sql = `INSERT INTO reservas (placa, tipoVehiculo, horaReserva) VALUES (?, ?, ?)`;
    
    db.query(sql, [reserva.placa, reserva.tipoVehiculo, reserva.horaReserva], (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(err, null);
        } else {
            console.log('Id de la nueva reserva: ', res.insertId);
            result(null, res.insertId);
        }
    });
};

module.exports = Reserva;