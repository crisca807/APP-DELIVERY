USE nodejs_base1; 

CREATE TABLE users( 

id BIGINT PRIMARY KEY AUTO_INCREMENT, 
email VARCHAR(180) NOT NULL UNIQUE, 
name VARCHAR(90) NOT NULL, 
lastname VARCHAR(90) NOT NULL, 
phone VARCHAR(90) NOT NULL UNIQUE, 
image  VARCHAR(255) NULL, 
password  VARCHAR(90) NOT NULL, 
created_at TIMESTAMP(0) NOT NULL, 
updated_at  TIMESTAMP(0) NOT NULL 
);

CREATE TABLE Reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idUser BIGINT,
    placa VARCHAR(20),
    tipoVehiculo ENUM('carro', 'moto'),
    horaReserva DATETIME,
    FOREIGN KEY (idUser) REFERENCES users(id)
);




`