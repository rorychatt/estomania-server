import { Vector2D } from "./Game";

let cityCounter = 1;

export class City {

    position: Vector2D
    ownerUUID: string
    name: string

    constructor(citySettings: CitySettings) {
        this.position = citySettings.position
        this.ownerUUID = citySettings.ownerUUID

        citySettings.name ? this.name = citySettings.name : this.name = this._getDefaultCityName();
    }

    _getDefaultCityName() {
        const result = cityCounter.toString();
        cityCounter++;
        return result
    }

}

export type CitySettings = {
    position: Vector2D
    ownerUUID: string
    name?: string
}