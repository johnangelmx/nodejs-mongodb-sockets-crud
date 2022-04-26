import app from './app'; // Importamos la configuracion de express
import { Server as WebsocketServer } from "socket.io"; // Importamos el servidor de websockets
import http from "http"; // Importamos el servidor http
import { connectDB } from './db'; // Importamos la conexion a la base de datos
import sockets from './sockets'; // Importamos el archivo de sockets


connectDB(); // Conectamos a la base de datos

// En la documentacion explica que express engloba una aplicacion http o resume una aplicacion http ,
// es mucho mejor que nuevamente que esta aplicacion la transformemos a un modulo que node tiene por defecto que tiene http
// Y como express tiene su propia logica no podemos simplemente pasar la configuracion de express a socket.io
const server = http.createServer(app) // Creamos un servidor http con las configuraciones anterirormente configuradas de express
const httpServer = server.listen(3000) // Asignamos el servidor http a una variable para poder usarlo en el servidor de websockets escuchando el puerto 3000
console.log('Server is running on port 3000'); 



const io = new WebsocketServer(httpServer) // Creamos un servidor de websockets con el servidor http que ya tenemos
sockets(io) // Le pasamos el servidor de websockets para que este escuche los sockets


