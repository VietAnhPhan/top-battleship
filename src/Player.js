import { Gameboard } from "./Gameboard";
import { Helper } from "./Helper";
import { Battleship } from "./ships/Battleship";
import { Carrier } from "./ships/Carrier";
import { Destroyer } from "./ships/Destroyer";
import { Patrol } from "./ships/Patrol";
import { Submarine } from "./ships/Submarine";

export class Player {
  constructor(role) {
    this.role = role;
    this._gameBoard = null;
    this._gameBoardUI = null;
  }

  assignedBoard(board, boardUI = null) {
    this._gameBoard = board;
    this._gameBoardUI = boardUI;
  }

  get gameBoard() {
    return this._gameBoard;
  }

  attack(opponent, shotCoord) {
    // let squareCoord = null;

    // if (this.role === "computer") {
    //   const randomIndex = Helper.getRandomNumber(
    //     opponent.gameBoard.squareCoords.length
    //   );
    //   squareCoord = opponent.gameBoard.squareCoords[randomIndex];
    //   Helper.removeCoordElement(opponent.gameBoard.squareCoords, squareCoord);
    // } else if (this.role === "human") {
    //   squareCoord = opponent.gameBoard.shotCoord;
    // }

    const opponentBoard = opponent.gameBoard;
    const shotSquare = opponentBoard.board[shotCoord.x][shotCoord.y];

    opponentBoard.receiveAttack(shotCoord);

    if (this._gameBoardUI) {
      this._gameBoardUI.update(opponent);
      this._gameBoardUI.updateShipStatus(shotSquare.ship, opponent.role);
    }
  }

  // startGame(gameBoard) {
  //   const carrier = new Carrier();
  //   const battleship = new Battleship();
  //   const destroyer = new Destroyer();
  //   const destroyer2 = new Destroyer();
  //   const patrol = new Patrol();
  //   const patrol2 = new Patrol();
  //   const submarine = new Submarine();

  //   gameBoard.placeShip(carrier);
  //   gameBoard.placeShip(battleship);
  //   gameBoard.placeShip(destroyer);
  //   gameBoard.placeShip(submarine);
  //   gameBoard.placeShip(patrol);
  //   gameBoard.placeShip(destroyer2);
  //   gameBoard.placeShip(patrol2);

  //   const playerboard = document.querySelector(`[data-role="${this.role}"]`);
  //   const playerBattleGround = playerboard.querySelector(
  //     ".player-board__battle-ground"
  //   );
  //   const shipHealthPoints = playerboard.querySelector(".ships-status");

  //   const carrierHealthPoints = this.healthPointView(carrier);
  //   const battleshipHealthPoints = this.healthPointView(battleship);
  //   const destroyerHealthPoints = this.healthPointView(destroyer);
  //   const patrolHealthPoints = this.healthPointView(patrol);
  //   const submarineHealthPoints = this.healthPointView(submarine);
  //   const destroyer2HealthPoints = this.healthPointView(destroyer2);
  //   const patrol2HealthPoints = this.healthPointView(patrol2);

  //   shipHealthPoints.append(
  //     carrierHealthPoints,
  //     battleshipHealthPoints,
  //     destroyerHealthPoints,
  //     submarineHealthPoints,
  //     patrolHealthPoints,
  //     destroyer2HealthPoints,
  //     patrol2HealthPoints
  //   );

  //   let axisY = "<div class='axis-y'>";

  //   for (let i = 1; i <= 10; i++) {
  //     axisY += "<div class='number-order'>" + i + "</div>";
  //   }

  //   axisY += "</div";

  //   playerBattleGround.innerHTML += axisY;

  //   const boardTable = document.createElement("table");
  //   const boardTableHead = document.createElement("thead");
  //   const boardTableRow = document.createElement("tr");
  //   boardTableRow.classList.add("axis-x");

  //   for (let i = 0; i < 10; i++) {
  //     const boardTableHeader = document.createElement("th");
  //     boardTableHeader.textContent = String.fromCharCode(65 + i);

  //     boardTableRow.appendChild(boardTableHeader);
  //   }

  //   boardTableHead.appendChild(boardTableRow);
  //   boardTable.appendChild(boardTableHead);

  //   const boardTableBody = document.createElement("tbody");

  //   gameBoard.board.forEach((row) => {
  //     const boardTableRowBattleGround = document.createElement("tr");

  //     row.forEach((square) => {
  //       const boardTableData = document.createElement("td");
  //       if (square.ship) {
  //         boardTableData.classList.add("square", "square-occupied");
  //       }
  //       if (!square.ship) {
  //         boardTableData.classList.add("square", "square-unoccupied");
  //       }
  //       // if (this.role === "computer")
  //       boardTableData.addEventListener("click", () => {
  //         if (square.ship && !square.ship.isSunk()) {
  //           square.ship.hit();
  //           this.updateHealthPointView(square.ship);
  //           boardTableData.classList.add("ship-get-shot");
  //         }
  //         if (!square.ship) {
  //           boardTableData.classList.add("square-get-shot");
  //         }
  //       });

  //       boardTableRowBattleGround.appendChild(boardTableData);
  //     });

  //     boardTableBody.appendChild(boardTableRowBattleGround);
  //   });

  //   boardTable.appendChild(boardTableBody);

  //   playerBattleGround.append(boardTable);
  // }

  // healthPointView(ship) {
  //   const shipType = ship.type;
  //   const lengthContainer = document.createElement("div");
  //   lengthContainer.classList.add("ship-healthpoints-length");

  //   for (let i = 0; i < ship.length; i++) {
  //     const square = document.createElement("div");

  //     square.classList.add("ship-healthpoint");
  //     square.setAttribute("get-hit", false);
  //     //   square.setAttribute("ship-id", ship.id);
  //     lengthContainer.appendChild(square);
  //   }

  //   const shipContainer = document.createElement("div");
  //   shipContainer.setAttribute("ship-type", ship.type);
  //   shipContainer.setAttribute("ship-id", ship.id);

  //   shipContainer.append(shipType, lengthContainer);

  //   return shipContainer;
  // }

  // updateHealthPointView(ship) {
  //   const player = document.querySelector(`[data-role='${this.role}']`);
  //   const shipID = player.querySelector(`[ship-id="${ship.id}"]`);
  //   const shipHealthPoint = shipID.querySelector("[get-hit='false']");

  //   shipHealthPoint.setAttribute("get-hit", true);
  // }
}
