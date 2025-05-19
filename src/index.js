import { Gameboard } from "./Gameboard";
import { Player } from "./Player";
import { Battleship } from "./ships/Battleship";
import { Carrier } from "./ships/Carrier";
import { Destroyer } from "./ships/Destroyer";
import { Patrol } from "./ships/Patrol";
import { Submarine } from "./ships/Submarine";
import { GameController } from "./GameController";

import "./css/style.css";
import { GameboardUI } from "./ui/GameboardUI";

// const humanPlayer = new Player("human");
// const computerPlayer = new Player("computer");

const gameController = new GameController();

// const humanGameBoard = new Gameboard(humanPlayer, gameController);
// const computerGameBoard = new Gameboard(computerPlayer, gameController);

// const humanGameBoardUI = new GameboardUI(gameController.humanGameBoard);
// const computerGameBoardUI = new GameboardUI(gameController.computerGameBoard);

// humanPlayer.assignedBoard(humanGameBoard, humanGameBoardUI);
// computerPlayer.assignedBoard(computerGameBoard, computerGameBoardUI);

// humanGameBoard.render(humanPlayer, gameController);
// computerGameBoard.render(computerPlayer, gameController);

gameController.playGame();
