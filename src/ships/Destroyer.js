import { Ship } from "../Ship";

export class Destroyer extends Ship {
  static type = "destroyer";
  constructor() {
    super(3);
    this._type = "Destroyer";
  }

  get type() {
    return this._type;
  }
}
