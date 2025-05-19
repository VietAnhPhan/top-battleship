/**
 * @jest-environment jsdom
 */

import { Gameboard } from "../src/Gameboard";
import { Player } from "../src/Player";

import { GameController } from "../src/GameController";
import { GameboardUI } from "../src/ui/GameboardUI";

test("Computer plays all the squares and human's ships are sunk: ", () => {
  //   const gameboard = new Gameboard();
  //   gameboard.initBoard();
  //   const carrier = new Carrier();
  //   const battleship = new Battleship();
  //   const destroyer = new Destroyer();
  //   const destroyer2 = new Destroyer();
  //   const patrol = new Patrol();
  //   const patrol2 = new Patrol();
  //   const submarine = new Submarine();
  //   gameboard.placeShip(carrier);
  //   gameboard.placeShip(battleship);
  //   gameboard.placeShip(destroyer);
  //   gameboard.placeShip(patrol);
  //   gameboard.placeShip(submarine);
  //   gameboard.placeShip(destroyer2);
  //   gameboard.placeShip(patrol2);
  //   gameboard.ships = carrier;
  //   gameboard.ships = battleship;
  //   gameboard.ships = destroyer;
  //   gameboard.ships = patrol;
  //   gameboard.ships = submarine;
  //   gameboard.ships = destroyer2;
  //   gameboard.ships = patrol2;
  //   const carrierLocation = carrier.location;
  //   expect(carrierLocation.length).toBe(5);
  //   expect(battleship.location.length).toBe(4);
  //   expect(destroyer.location.length).toBe(3);
  //   expect(patrol.location.length).toBe(2);
  //   expect(submarine.location.length).toBe(3);
  //   const totalArr = [
  //     ...carrier.location,
  //     ...destroyer.location,
  //     ...patrol.location,
  //     ...submarine.location,
  //     ...battleship.location,
  //     ...patrol2.location,
  //     ...destroyer2.location,
  //   ];
  //   const uniqueArr = [];
  //   for (let i = 0; i < totalArr.length; i++) {
  //     Helper.pushUniqueCoord(uniqueArr, totalArr[i]);
  //   }
  //   expect(totalArr.length === uniqueArr.length).toBeTruthy;
  //   expect(gameboard.board.length).toBe(10);
  //   expect(gameboard.ships.length).toBe(7);
  //   carrier.hitTimes = carrier.length;
  //   battleship.hitTimes = battleship.length;
  //   destroyer.hitTimes = destroyer.length;
  //   destroyer2.hitTimes = destroyer2.length;
  //   patrol.hitTimes = patrol.length;
  //   patrol2.hitTimes = patrol2.length;
  //   submarine.hitTimes = submarine.length;
  //   expect(gameboard.areSunk()).toBeTruthy();
  // carrierLocation.forEach((item, index) => {
  //   expect(gameboard.board[item[0]][item[1]].ship).toEqual({
  //     _length: 5,
  //     hitTimes: 0,
  //     sunk: false,
  //     _location: [
  //       [5, 5],
  //       [5, 6],
  //       [5, 7],
  //       [5, 8],
  //       [5, 9],
  //     ],
  //     type: "Carrier",
  //   });
  // });

  // const humanGameBoardUI = new GameboardUI(humanGameBoard);
  // const computerGameBoardUI = new GameboardUI(computerGameBoard);

  // gameController.playGame();

  const gameController = new GameController();
  // console.log(gameController.humanGameBoard.board);
  expect(gameController.computerGameBoard.squareCoords.length).toBe(100);
  expect(gameController.humanGameBoard.squareCoords.length).toBe(100);
  // console.log(gameController.humanGameBoard.ships);
  // for (let i = 0; i < 100; i++) {
  //   const shotCoord = gameController.getComputerShot();
  //   computerPlayer.attack(humanPlayer, shotCoord);
  // }

  // expect(humanGameBoard.areSunk()).toBeTruthy();
});
