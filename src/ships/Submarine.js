import { Ship } from "../Ship";

export class Submarine extends Ship {
  static type = "submarine";

  constructor() {
    super(3);
    this._type = "Submarine";
  }

  get type() {
    return this._type;
  }
}
