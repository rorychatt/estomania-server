class Unit {

    movement: number
    power: PowerCharacteristic
    ownerUUID: `${string}-${string}-${string}-${string}-${string}`

    constructor(ownerUUID: `${string}-${string}-${string}-${string}-${string}`) {
        this.movement = 2;
        this.power = {
            melee: 10,
            ranged: 10
        }
        this.ownerUUID = ownerUUID
    }

}

export type PowerCharacteristic = {
    melee: number;
    ranged: number;
}
