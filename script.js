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


const GameController = (() => {
    let turn = "playerOne";

    

    function winChecker(var1,var2,var3) {
        const cells = {};
        Object.assign(cells,arrOfGameBoardCells);
        if((cells[var1].textContent===cells[var2].textContent) && (cells[var1].textContent===cells[var3].textContent)) {
            if(cells[var1].textContent === "X") {
                alert("playerOne Wins")
            }else if(cells[var1].textContent === "O") {
                alert("playerTwo Wins")
            }
        }
        console.log(cells[var1].textContent)
    }

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