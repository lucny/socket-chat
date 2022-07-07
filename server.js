// Připojení knihoven
const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');

// Vytvoření základního objektu webové aplikace ve frameworku Express
const app = express();
// Vytvoření objektu http serveru
const server = http.createServer(app);
// Vytvoření objektu socket.io
const io = socketio(server);

// Složka se statickými soubory
app.use(express.static(path.join(__dirname, 'public')));

// Akce spojené se sockety
io.on('connection', (socket) => {
    // V případě přijetí zprávy označené "chat"...
    socket.on('chat', msg => {
        // ...bude všem připojeným klientům rozeslána (emitována) přijatá zpráva
        io.emit('chat', msg);
    });
})

// HTTP Server naslouchá na portu 5000
const PORT = process.env.PORT || 5000;
server.listen(PORT, function() {
    console.log(`Server listen on port ${PORT}`);
})
