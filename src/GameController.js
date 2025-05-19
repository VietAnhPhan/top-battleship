import { Gameboard } from "./Gameboard";
import { Helper } from "./Helper";
import { Player } from "./Player";
import { GameboardUI } from "./ui/GameboardUI";

export class GameController {
  constructor() {
    this.humanPlayer = null;
    this.computerPlayer = null;
    this._humanGameBoard = null;
    this._computerGameBoard = null;
    this._playerTurn = null;
    this.humanGameBoardUI = null;
    this.computerGameBoardUI = null;

    this.initPlayers();
    this.initGameBoardLogic();
    this.initGameBoardUI();
    this.assignBoard();
  }

  get humanGameBoard() {
    return this._humanGameBoard;
  }

  get computerGameBoard() {
    return this._computerGameBoard;
  }

  set humanGameBoard(board) {
    this._humanGameBoard = board;
  }

  set computerGameBoard(board) {
    this._computerGameBoard = board;
  }

  initGameBoardUI() {
    this.humanGameBoardUI = new GameboardUI(this.humanGameBoard);
    this.computerGameBoardUI = new GameboardUI(this.computerGameBoard);
  }

  initPlayers() {
    this.humanPlayer = new Player("human");
    this.computerPlayer = new Player("computer");
  }

  initGameBoardLogic() {
    this.humanGameBoard = new Gameboard(this.humanPlayer, this);
    this.computerGameBoard = new Gameboard(this.computerPlayer, this);
  }

  assignBoard() {
    this.humanPlayer.assignedBoard(this.humanGameBoard, this.humanGameBoardUI);
    this.computerPlayer.assignedBoard(
      this.computerGameBoard,
      this.computerGameBoardUI
    );
  }
  // initShip() {
  //   const carrier = new Carrier();
  //   const battleship = new Battleship();
  //   const destroyer = new Destroyer();
  //   const destroyer2 = new Destroyer();
  //   const patrol = new Patrol();
  //   const patrol2 = new Patrol();
  //   const submarine = new Submarine();

  //   return [
  //     carrier,
  //     battleship,
  //     destroyer,
  //     destroyer2,
  //     patrol,
  //     patrol2,
  //     submarine,
  //   ];
  // }

  // placeShipsOnBoard() {
  //   const ships = this.initShip();
  //   const gameBoard = new Gameboard();
  //   ships.map((ship) => gameBoard.placeShip(ship));

  //   return {
  //     ships: ships,
  //     gameBoard: gameBoard,
  //   };
  // }

  endGame(loser) {
    // console.log(loser);
    if (loser.role === this.computerPlayer.role) alert("Human win!!!");
    else if (loser.role === this.humanPlayer.role) alert("Computer win!!!");
  }

  isEndGame() {
    if (
      this.humanPlayer.gameBoard.areSunk() ||
      this.computerPlayer.gameBoard.areSunk()
    )
      return true;
    return false;
  }

  showWhoWin() {
    if (this.humanPlayer.gameBoard.areSunk()) alert("Computer win!!!");
    else if (this.computerPlayer.gameBoard.areSunk()) alert("Human win!!!");
  }

  playGame() {
    if (this.isEndGame()) {
      this.showWhoWin();
      return;
    }

    this.computerPlayer.attack(this.humanPlayer, this.getComputerShot());

    // if (this.humanPlayer.gameBoard.areSunk()) {
    //   this.endGame(this.humanPlayer);
    //   return;
    // }

    this.playerTurn = this.humanPlayer;
  }

  get playerTurn() {
    return this._playerTurn;
  }

  set playerTurn(player) {
    this._playerTurn = player;
  }

  isHumanTurn() {
    return this.playerTurn.role === "human" ? true : false;
  }

  getComputerShot() {
    const randomIndex = Helper.getRandomNumber(
      this.humanPlayer.gameBoard.squareCoords.length
    );

    const shotCoord = this.humanPlayer.gameBoard.squareCoords[randomIndex];

    Helper.removeCoordElement(
      this.humanPlayer.gameBoard.squareCoords,
      shotCoord
    );

    return shotCoord;
  }
}
