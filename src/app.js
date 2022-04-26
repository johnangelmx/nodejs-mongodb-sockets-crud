// Configurar un servidor de web sockets ,a su vez necesita un servidor http
import express from "express"; // Importando express y configurandolo de manera basica:
import path from "path"; // Importando path para poder usar las rutas de las carpetas


const app = express();

app.use(express.static(__dirname + "/public"));

export default app;