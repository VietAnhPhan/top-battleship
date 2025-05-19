export class GameboardUI {
  constructor(gameboard) {
    this.gameboard = gameboard;
    this.render(this.gameboard.player, this.gameboard.gameController);
  }

  renderStatusView(ships, player) {
    const playerboard = document.querySelector(`[data-role="${player.role}"]`);
    if (!playerboard) return;
    const shipsStatus = playerboard.querySelector(".ships-status");

    // console.log(this.gameboard);
    ships.map((ship) => {
      const shipStatus = this.setShipStatus(ship);
      shipsStatus.appendChild(shipStatus);
    });
  }

  setShipStatus(ship) {
    const shipType = ship.type;
    const lengthContainer = document.createElement("div");
    lengthContainer.classList.add("ship-healthpoints-length");

    for (let i = 0; i < ship.length; i++) {
      const square = document.createElement("div");

      square.classList.add("ship-healthpoint");
      square.setAttribute("get-hit", false);
      //   square.setAttribute("ship-id", ship.id);
      lengthContainer.appendChild(square);
    }

    const shipStatus = document.createElement("div");
    shipStatus.setAttribute("ship-type", ship.type);
    shipStatus.setAttribute("ship-id", ship.id);

    shipStatus.append(shipType, lengthContainer);

    return shipStatus;
  }

  render(player, gameController) {
    this.renderStatusView(this.gameboard.ships, player);

    const playerboard = document.querySelector(`[data-role="${player.role}"]`);

    if (!playerboard) return;

    const playerBattleGround = playerboard.querySelector(
      ".player-board__battle-ground"
    );

    let axisY = "<div class='axis-y'>";

    for (let i = 1; i <= 10; i++) {
      axisY += "<div class='number-order'>" + i + "</div>";
    }

    axisY += "</div";

    playerBattleGround.innerHTML += axisY;

    const boardTable = document.createElement("table");
    const boardTableHead = document.createElement("thead");
    const boardTableRow = document.createElement("tr");
    boardTableRow.classList.add("axis-x");

    for (let i = 0; i < 10; i++) {
      const boardTableHeader = document.createElement("th");
      boardTableHeader.textContent = String.fromCharCode(65 + i);

      boardTableRow.appendChild(boardTableHeader);
    }

    boardTableHead.appendChild(boardTableRow);
    boardTable.appendChild(boardTableHead);

    const boardTableBody = document.createElement("tbody");
    boardTableBody.setAttribute("data-role", player.role);

    this.gameboard.board.forEach((row, x) => {
      const boardTableRowBattleGround = document.createElement("tr");

      row.forEach((square, y) => {
        const boardTableData = document.createElement("td");
        if (square.ship) {
          boardTableData.classList.add("square", "square-occupied");
        }
        if (!square.ship) {
          boardTableData.classList.add("square", "square-unoccupied");
        }
        // if (square.blankSpace)
        //   boardTableData.classList.add("square-blank-space");

        if (player.role === "computer")
          boardTableData.addEventListener("click", () => {
            if (gameController.isEndGame()) {
              gameController.showWhoWin();
              return;
            }

            if (
              this.gameboard.shotCoord &&
              this.gameboard.shotCoord.x === x &&
              this.gameboard.shotCoord.y === y
            )
              return;

            if (!gameController.isEndGame() && gameController.isHumanTurn()) {
              player.attack(gameController.computerPlayer, { x: x, y: y });
              //   console.log(x, y);
              //   if (!player.board.receiveAttack({ x: x, y: y })) return;
              //   this.update(player.role);
              //   this.updateShipStatus(square.ship, player.role);
              //   if (player.board.areSunk()) {
              //     gameController.endGame(player);
              //     return;
              //   }
              gameController.playGame();
            }
            // if (player.gameBoard.areSunk()) {
            //   gameController.endGame(player);
            //   return;
            // }
            // console.log(boardTableBody.childNodes);
            // if (square.ship && !square.ship.isSunk()) {
            //   square.ship.hit();
            //   this.updateShipStatus(square.ship, player.role);
            //   boardTableData.classList.add("ship-get-shot");
            // }
            // if (!square.ship) {
            //   boardTableData.classList.add("square-get-shot");
            // }
          });

        boardTableRowBattleGround.appendChild(boardTableData);
      });

      boardTableBody.appendChild(boardTableRowBattleGround);
    });

    boardTable.appendChild(boardTableBody);

    playerBattleGround.append(boardTable);
  }

  updateShipStatus(ship, playerRole) {
    if (!ship) return;
    const player = document.querySelector(`[data-role='${playerRole}']`);
    const shipID = player.querySelector(`[ship-id="${ship.id}"]`);
    const shipHealthPoint = shipID.querySelector("[get-hit='false']");
    if (shipHealthPoint) shipHealthPoint.setAttribute("get-hit", true);
    // shipHealthPoints.forEach((shipHealthPoint) => {

    // });
  }

  update(player) {
    const squareDOMs = document.querySelector(
      `tbody[data-role=${player.role}]`
    ).childNodes;

    const opponentGameBoard = player.gameBoard;
    const shotCoord = opponentGameBoard.shotCoord;

    if (
      opponentGameBoard.shotSquare.ship &&
      opponentGameBoard.shotSquare.ship.isShot() &&
      opponentGameBoard.shotSquare.shot
    ) {
      squareDOMs[shotCoord.x].childNodes[shotCoord.y].classList.add(
        "ship-get-shot"
      );
    } else if (opponentGameBoard.shotSquare.shot) {
      squareDOMs[shotCoord.x].childNodes[shotCoord.y].classList.add(
        "square-get-shot"
      );
    }

    if (
      opponentGameBoard.shotSquare.ship &&
      opponentGameBoard.shotSquare.ship.isSunk()
    ) {
      opponentGameBoard.shotSquare.ship.blankSpaces.map((blankSpace) => {
        squareDOMs[blankSpace.x].childNodes[blankSpace.y].classList.add(
          "square-get-shot"
        );
      });
    }
  }
}
