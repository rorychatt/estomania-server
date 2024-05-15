import { GameSettings } from "./GameSettings";
import HexGridMap from "./HexGridMap";
import { Player } from "./Player";

export class Game {

    turn: number
    hexGridMap: HexGridMap
    currentPlayers: Player[] = []

    constructor(gameSettings: GameSettings) {
        this.turn = 1;
        this.hexGridMap = new HexGridMap(gameSettings.mapSize)
    }

    getGridData() {
        return this.hexGridMap.getGridData();
    }

    incrementTurn() {
        this.turn += 1
    }

    addPlayer(player: Player) {
        this.currentPlayers.push(player)
    }

    removePlayerBySocketID(socketId: string) {
        this.currentPlayers = this.currentPlayers.filter((pl) => pl.socketId !== socketId);
        console.log(this.currentPlayers);
    }

}

export type Vector2D = {
    x: number;
    z: number;
};