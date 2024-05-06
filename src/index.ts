import express from "express";
import { Server as SocketIOServer } from "socket.io";
import http from "http";
import cors from "cors";
import HexGridMap from "./HexGrid";

const app = express();
app.use(cors({ origin: "http://localhost:8080" }));

const server = http.createServer(app);
const io = new SocketIOServer(server, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"],
    },
});

const mapSettings = {
    mapSize: {
        x: 20,
        z: 10,
    },
};

const hexGrid = new HexGridMap(mapSettings.mapSize);

io.on("connection", (socket) => {
    console.log("A user connected");
    socket.emit("mapData", hexGrid.getGridData());

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});
