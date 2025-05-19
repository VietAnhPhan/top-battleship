import { Gameboard } from "./src/Gameboard";
import { Helper } from "./src/Helper";
import { Ship } from "./src/Ship";
import { Battleship } from "./src/ships/Battleship";
import { Carrier } from "./src/ships/Carrier";
import { Destroyer } from "./src/ships/Destroyer";
import { Patrol } from "./src/ships/Patrol";
import { Submarine } from "./src/ships/Submarine";

// beforeEach(() => {
//   jest.spyOn(global.Math, "random").mockReturnValue(0.5);
// });

// afterEach(() => {
//   jest.spyOn(global.Math, "random").mockRestore();
// });

test("Helper", () => {
  // const randomCoord = Helper.randomCoordination(10);
  // randomCoord.forEach((item) => {
  //   expect(item).toBe(5);
  //   // expect(item).toBe(10);
  // });

  // expect(Helper.randomDirection()).toBe(1);

  const arr1 = { x: 1, y: 2 };
  const arr2 = { x: 2, y: 2 };
  const arr3 = { x: 3, y: 2 };
  const arr4 = { x: 3, y: 2 };
  const arr5 = { x: 5, y: 2 };
  const totalArr = [];
  Helper.pushUniqueCoord(totalArr, arr1);
  Helper.pushUniqueCoord(totalArr, arr2);
  Helper.pushUniqueCoord(totalArr, arr3);
  Helper.pushUniqueCoord(totalArr, arr4);
  Helper.pushUniqueCoord(totalArr, arr5);

  expect(totalArr).toEqual([
    { x: 1, y: 2 },
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 5, y: 2 },
  ]);

  const array = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 4 },
  ];

  Helper.removeCoordElement(array, { x: 2, y: 3 });
  expect(array).toEqual([
    { x: 1, y: 2 },
    { x: 3, y: 4 },
  ]);
});

test("Ship", () => {
  const gameboard = new Gameboard();
  gameboard.initBoard();

  let ship = new Ship(5, 5);
  const carrier = new Carrier();
  gameboard.placeShip(carrier);
  const carrierLocation = carrier.location;

  expect(ship.isSunk()).toBeTruthy();

  ship = new Ship(5, 4);
  expect(ship.isSunk()).toBeFalsy();

  // const carrier = new Carrier();
  expect(carrier.length).toBe(5);

  expect(carrier.location.length).toBe(5);

  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  carrier.hit();
  expect(carrier.isSunk()).toBeTruthy();
  // carrierLocation.forEach((item, index) => {
  //   expect(item[0]).toBe(5);
  //   expect(item[1]).toBe(5 + index);
  // });
});
