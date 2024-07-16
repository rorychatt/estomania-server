import { randomUUID } from "crypto";
import { Vector2D } from "./Game";
import { Player } from "./Player";

export class Unit {
  movement: number;
  power: PowerCharacteristic;
  uuid: `${string}-${string}-${string}-${string}-${string}`
  ownerUUID: string;
  ownerName: string;
  position: Vector2D;

  constructor(owner: Player, position: Vector2D) {
    this.movement = 2;
    this.power = {
      melee: 10,
      ranged: 10,
    };
    this.ownerUUID = owner.uuid;
    this.ownerName = owner.nickname
    this.uuid = randomUUID();
    this.position = position;
  }

  getPosition() {
    return this.position;
  }

  setPosition(newPos: Vector2D) {
    //TODO: Check for pos validity?
    this.position = newPos;
  }
}

export class Settler extends Unit {
  name = "Settler";

  constructor(owner: Player, position: Vector2D) {
    super(owner, position);
  }
}

export type PossiblePlayerUnits = Settler;

export type PowerCharacteristic = {
  melee: number;
  ranged: number;
};
