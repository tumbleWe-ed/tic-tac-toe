/* eslint-disable no-console */
const gameBoard = document.querySelector(".game-board");

(function () {
    
    for (let i = 0; i < 9 ; i++) {
        const div = document.createElement('div')
        gameBoard.append(div);
    }
    
})();

const arrOfGameBoardCells = new Object(document.querySelectorAll('.game-board div'))
/** arrOfGameBoardCells.forEach((e) => {
    e.addEventListener('click',(e) => {
        console.log(e)
    })
})* */

arrOfGameBoardCells.forEach((e) => {
    e.addEventListener('click',() => {
        e.textContent = "5"
    })
})

const GameController = (() => {
    let turn = "playerOne";

    arrOfGameBoardCells.forEach((e) => {
        e.addEventListener('click',() => {
            if(turn === "playerOne") {
                turn = "playerTwo"
                e.textContent = "X"
            } else if(turn === "playerTwo") {
                turn = "playerOne"
                e.textContent = "O"
            }
        })
    })
})();