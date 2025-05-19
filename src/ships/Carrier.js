import { Ship } from "../Ship";

export class Carrier extends Ship {
  static type = "carrier";

  constructor() {
    super(5);
    this._type = "Carrier";
  }

  get type() {
    return this._type;
  }
}
