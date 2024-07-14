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
    this.hexGridMap.grid.forEach((row) => {
      row.forEach((hex) => {
        if (hex.tileType === "plains" && hex.ownerUUID === undefined) {
          this.spawnSettlerUnitOnMap(hex.position, player);
          return;
        }
      });
    });
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
