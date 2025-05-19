import { Ship } from "../Ship";

export class Patrol extends Ship {
  static type = "patrol";

  constructor() {
    super(2);
    this._type = "Patrol";
  }

  get type() {
    return this._type;
  }
}
