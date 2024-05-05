import express from 'express';
import { Server as SocketIOServer } from 'socket.io';
import http from 'http';
import HexGrid from './HexGrid';

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

const hexGrid = new HexGrid(20, 10);

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.emit('mapData', hexGrid.getGridData());
  
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});