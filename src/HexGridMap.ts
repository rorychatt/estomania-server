import { Vector2D } from "./Game";

export class Hexagon {
    position: Vector2D;
    tileType: PossibleTileType;
    ownerUUID?: `${string}-${string}-${string}-${string}-${string}`

    constructor(position: Vector2D) {
        this.position = position;
        this.tileType = this._getRandomTileType()
    }

    _getRandomTileType(): PossibleTileType {
        const terrains: PossibleTileType[] = ["plains", "water"];
        const randomIndex = Math.floor(Math.random() * terrains.length);
        return terrains[randomIndex];
    }

    setOwner(tileOwnerUUID: `${string}-${string}-${string}-${string}-${string}`) {
        this.ownerUUID = tileOwnerUUID
    }

    removeOwner() {
        this.ownerUUID = undefined
    }
}

export class HexGridMap {

    grid: Hexagon[][];
    mapSize: Vector2D;

    constructor(mapSize: Vector2D) {
        this.grid = [];
        this.mapSize = mapSize
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

    getMapSize() {
        return this.mapSize
    }

}

type PossibleTileType = "plains" | "water"
