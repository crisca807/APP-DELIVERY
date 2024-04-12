const express = require('express');
const passport = require('passport');

const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

/** 
 * Importar rutas 
 */ 
const usersRoutes = require('./routes/usersRoutes'); 
const reservaRoutes = require('./routes/reservaRoutes');

const port = process.env.PORT || 3000; 

app.use(logger('dev'));  // Loguear las solicitudes en la consola para depuración
app.use(express.json()); // Habilitar el manejo de solicitudes JSON
app.use(express.urlencoded({ extended: true })); // Habilitar el manejo de solicitudes codificadas
app.use(cors()); // Permitir solicitudes desde cualquier origen
app.use(passport.initialize()); // Inicializar Passport para autenticación
app.use(passport.session()); // Inicializar la sesión de Passport para autenticación persistente

require('./config/passport')(passport); // Configurar Passport para estrategias de autenticación

app.disable('x-powered-by'); // Deshabilitar la cabecera X-Powered-By para mayor seguridad

app.set('port', port); // Establecer el puerto en el que se ejecutará el servidor

/** 
 * Llamar a las rutas 
 */ 
app.use('/api/users', usersRoutes); // Montar las rutas de usuarios con el prefijo '/api/users'
app.use('/api/reservas', reservaRoutes); // Montar las rutas de reservas con el prefijo '/api/reservas'
 
// Iniciar el servidor 
server.listen(port, '192.168.0.17' || 'localhost', function() { 
    console.log('App Node.js ' + process.pid + ' ejecutando en ' + 
server.address().address + ':' + server.address().port); 
}); 

/** RUTAS ***********************************************/ 
app.get('/', (req, res) => { 
    res.send('Estas en la ruta raiz del backend.'); 
}); 

app.get('/test', (req, res) => { 
    res.send('Estas en la ruta TEST'); 
}); 

// Manejo de errores 
app.use((err, req, res, next) => { 
    console.error(err); 
    res.status(err.status || 500).send(err.stack); 
}); 