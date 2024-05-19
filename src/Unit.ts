import { Vector2D } from "./Game";

export class Unit {

    movement: number
    power: PowerCharacteristic
    ownerUUID: string
    position: Vector2D

    constructor(ownerUUID: string, position: Vector2D) {
        this.movement = 2;
        this.power = {
            melee: 10,
            ranged: 10
        }
        this.ownerUUID = ownerUUID
        this.position = position
    }

    getPosition() {
        return this.position
    }

    setPosition(newPos: Vector2D) {
        //TODO: Check for pos validity?
        this.position = newPos
    }

}

export class Settler extends Unit {

    name = "Settler"

    constructor(ownerUUID: string, position: Vector2D) {
        super(ownerUUID, position)
    }

}

export type PossiblePlayerUnits = Settler

export type PowerCharacteristic = {
    melee: number;
    ranged: number;
}
