import { Ship } from "../Ship";

export class Battleship extends Ship {
  static type = "battleship";
  constructor() {
    super(4);
    this._type = "Battleship";
  }

  get type() {
    return this._type;
  }
}
