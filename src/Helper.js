export class Helper {
  static randomCoordination(size) {
    return {
      x: Math.floor(Math.random() * size),
      y: Math.floor(Math.random() * size),
    };
  }

  static randomDirection() {
    return Math.floor(Math.random() * 2);
  }

  static getRandomNumber(upperLimit) {
    return Math.floor(Math.random() * upperLimit);
  }

  static pushUniqueCoord(array, coord) {
    if (array.length === 0) {
      array.push(coord);
      return;
    } else {
      for (let i = 0; i < array.length; i++) {
        if (coord.x === array[i].x && coord.y === array[i].y) {
          // console.log(
          //   "Not unique: " +
          //     coord.x +
          //     " = " +
          //     array[i].x +
          //     " AND " +
          //     +coord.y +
          //     " = " +
          //     array[i].y
          // );
          return;
        }
      }

      array.push(coord);
    }
  }

  static removeCoordElement(array, coord) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].x === coord.x && array[i].y === coord.y) {
        array.splice(i, 1);
      }
    }
  }

  static removeCoordsFromSquareCoords(removedCoords, squareCoords) {
    for (let i = 0; i < removedCoords.length; i++) {
      for (let j = 0; j < squareCoords.length; j++) {
        if (
          removedCoords[i].x === squareCoords[j].x &&
          removedCoords[i].y === squareCoords[j].y
        ) {
          squareCoords.splice(j, 1);
        }
      }
    }
  }
}
