import { randomUUID } from "crypto";
import { City } from "./City";
import { PossiblePlayerUnits, Unit } from "./Unit";

export class Player {
  uuid;
  socketId;
  cities: City[] = [];
  units: PossiblePlayerUnits[] = [];

  constructor(socketId: string) {
    this.uuid = randomUUID();
    this.socketId = socketId;
  }

  addUnit(unit: PossiblePlayerUnits) {
    this.units.push(unit);
  }
}
