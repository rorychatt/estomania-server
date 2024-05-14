import { GameSettings } from "./GameSettings";
import HexGridMap from "./HexGridMap";

export class Game {

    turn: number
    hexGridMap: HexGridMap

    constructor(gameSettings: GameSettings) {
        this.turn = 1;
        this.hexGridMap = new HexGridMap(gameSettings.mapSize)
    }

    getGridData(){
        return this.hexGridMap.getGridData();
    }
}

export type Vector2D = {
    x: number;
    z: number;
};