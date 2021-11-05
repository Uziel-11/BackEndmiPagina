const mysql = require("mysql");

const config = {
    host: "localhost",
    user: "root",
    database: "mitienda",
    password: "perezlopez11"
};

const conection = mysql.createConnection(config);

conection.connect(function (err){
    if (err) throw err;
    console.log("Conexion exitosa a la Base de Datos");
});

module.exports = conection;