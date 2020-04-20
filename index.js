/* El protocolo HTTP consiste en recibir peticiones de los clientes y dar respuestas desde el servidor 
const http = require('http');
const colors = require('colors');

// Crear un servidor desde HTTP - request(req), response(res);

const handleServer = function(req, res){
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>Hola desde Node.js</h1>');
    res.end();
}

const server = http.createServer(handleServer);                    
server.listen(3000, ()=>{                       // Escuchando desde el puerto 3000
    console.log("Server on Port 3000".cyan);    // Mostrar por consola
});*/                          

const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Aqui Node.js y Espress</h1>');
    res.end();
});
server.listen(3000, () => {
    console.log("Server on Port 3000".cyan);
});