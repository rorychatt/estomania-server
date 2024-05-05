import express from 'express';
import { Server as SocketIOServer } from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});


import HexGrid from './HexGrid';

const hexGrid = new HexGrid(60, 30);
