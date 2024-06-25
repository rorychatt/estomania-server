import { GameSettings } from "./GameSettings";
import { HexGridMap } from "./HexGridMap";
import { Player } from "./Player";
import { Settler } from "./Unit";

export class Game {
  turn: number;
  hexGridMap: HexGridMap;
  currentPlayers: Player[] = [];

  constructor(gameSettings: GameSettings) {
    this.turn = 1;
    this.hexGridMap = new HexGridMap(gameSettings.mapSize);
  }

  getGridData() {
    return this.hexGridMap.getGridData();
  }

  incrementTurn() {
    this.turn += 1;
  }

  addPlayer(player: Player) {
    this.currentPlayers.push(player);
    this.spawnPlayerOnMap(player);
  }

  spawnPlayerOnMap(player: Player) {
    const mapSize: Vector2D = this.hexGridMap.getMapSize();
    const randomX = Math.floor(Math.random() * mapSize.x);
    const randomZ = Math.floor(Math.random() * mapSize.z);

    this.spawnSettlerUnitOnMap({ x: randomX, z: randomZ }, player);
  }

  spawnSettlerUnitOnMap(position: Vector2D, owner: Player) {
    const settler = new Settler(owner.uuid, position);
    owner.addUnit(settler);
  }

  removePlayerBySocketID(socketId: string) {
    this.currentPlayers = this.currentPlayers.filter(
      (pl) => pl.socketId !== socketId
    );
    console.log(this.currentPlayers);
  }
}

export type Vector2D = {
  x: number;
  z: number;
};
