type Vector2D = {
    x: number;
    z: number;
};

class Hexagon {
    position: Vector2D;

    constructor(position: Vector2D) {
        this.position = position;
    }
}

class HexGridMap {
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

export default HexGridMap;
