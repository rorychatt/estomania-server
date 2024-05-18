import { Vector2D } from "./Game";

class Hexagon {
    position: Vector2D;
    tileType: PossibleTileType;

    constructor(position: Vector2D) {
        this.position = position;
        this.tileType = this._getRandomTileType()
    }

    _getRandomTileType(): PossibleTileType {
        const terrains: PossibleTileType[] = ["plains", "water"];
        const randomIndex = Math.floor(Math.random() * terrains.length);
        return terrains[randomIndex];
    }
}

export class HexGridMap {
    grid: Hexagon[][];

    constructor(mapSize: Vector2D) {
        this.grid = [];
        for (let x = 0; x < mapSize.x; x++) {
            this.grid[x] = [];
            for (let z = 0; z < mapSize.z; z++) {
                this.grid[x][z] = new Hexagon({ x, z });
            }
        }
    }

    getGridData() {
        return this.grid;
    }

}

type PossibleTileType = "plains" | "water"
