export class Ship {
  constructor(length = 1, hitTimes = 0, sunk = false) {
    this._length = length;
    this.hitTimes = hitTimes;
    this.sunk = sunk;
    this._location = [];
    this._id = this.constructor.type + this.constructor.incrementID();
    this._blankSpaces = [];
  }

  set blankSpaces(blank) {
    this._blankSpaces.push(blank);
  }

  get blankSpaces() {
    return this._blankSpaces;
  }

  static incrementID() {
    if (!this.idCounter) this.idCounter = 0;
    return this.idCounter++;
  }

  get id() {
    return this._id;
  }

  hit() {
    this.hitTimes++;
  }

  isSunk() {
    return this.length === this.hitTimes ? true : false;
  }

  get length() {
    return this._length;
  }

  set location(square) {
    this.location.push(square);
  }

  get location() {
    return this._location;
  }

  isShot() {
    return this.hitTimes > 0 ? true : false;
  }
}
