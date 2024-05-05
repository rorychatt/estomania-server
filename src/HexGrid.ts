type Hexagon = {
    x: number,
    y: number,
    z: number // Useful for cubic coordinates in hex grids
};

class HexGrid {
    grid: Hexagon[][];

    constructor(width: number, height: number) {
        this.grid = [];
        for (let x = 0; x < width; x++) {
            this.grid[x] = [];
            for (let z = 0; z < height; z++) {
                const y = -x - z;
                this.grid[x][z] = { x, y, z };
            }
        }
    }

    getGridData() {
        return this.grid;
      }
}

export default HexGrid;
