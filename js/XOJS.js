// random number 0 = X;
// random number 1 = O;
// player_plays true = X;
// player_plays false = O;

const displayPlayerTurn = document.getElementById("player-turn");
const player_win_X = document.getElementById("player-X");
const player_win_O = document.getElementById("player-O");
let player_plays = null;
let winner = null;
let X_countWins = 0;
let O_countWins = 0;

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const buttons = [button1, button2, button3, button4, button5, button6, button7, button8, button9];

generatePlayerTurn();

function play(buttonNumber) {
    if (player_plays) {
        player_plays = false;
        displayPlayerTurn.textContent = "Turn of the player O";
        displayPlayerTurn.style.color = "#00ff04";
        chooseButton(buttonNumber, "X", "#ff0033");
        checkWinner();
    }
    else {
        player_plays = true;
        displayPlayerTurn.textContent = "Turn of the player X";
        displayPlayerTurn.style.color = "#ff0033";
        chooseButton(buttonNumber, "O", "#00ff04");
        checkWinner();
    }
}

function chooseButton(number, letter, color) {
    for(let x = 0; x < buttons.length; x++) {
        if (buttons[x].textContent.length === 0) {
            if(x == number-1) {
                buttons[x].textContent = letter;
                buttons[x].style.color = color;
                break;
            }
        }
    }
}

function checkWinner() {
    const winnerButtons = [[button1, button2, button3],
                           [button4, button5, button6],
                           [button7, button8, button9],
                           [button1, button4, button7], 
                           [button2, button5, button8], 
                           [button3, button6, button9], 
                           [button1, button5, button9], 
                           [button3, button5, button7]];

    let count = 0;
    for(let x = 0; x < winnerButtons.length; x++) {
        for(let y = 0; y < winnerButtons[x].length; y++) {
            if(winnerButtons[x][y].textContent == "X" && winnerButtons[x][y+1].textContent == "X" && winnerButtons[x][y+2].textContent == "X") {
                count++;
                winner = true;
            }
            else if(winnerButtons[x][y].textContent == "O" && winnerButtons[x][y+1].textContent == "O" && winnerButtons[x][y+2].textContent == "O") {
                count++;
                winner = false;
            }
            break;
        }
        if(count == 1) {
            displayWinner(winnerButtons[x]);
            break;
        }
    }
}

function displayWinner(completedButtons) {
    if (winner) {
        X_countWins++;
        player_win_X.textContent = `X = ${X_countWins}`;
        displayPlayerTurn.textContent = "The player X won";
        displayPlayerTurn.style.color = "#ff0033";

        for(let button of completedButtons) {
            button.style.color = "#000";
            button.style.backgroundColor = "#ff0033";
        }
    }
    else {
        O_countWins++;
        player_win_O.textContent = `O = ${O_countWins}`;
        displayPlayerTurn.textContent = "The player O won";
        displayPlayerTurn.style.color = "#00ff04";

        for(let button of completedButtons) {
            button.style.color = "#000";
            button.style.backgroundColor = "#00ff04";
        }
    }

    for(let button of buttons) {
        button.style.pointerEvents = "none";
    }
}

function repeat() {
    for(let button of buttons) {
        button.textContent = "";
        button.style.color = "#000";
        button.style.backgroundColor = "#999ea1";
        button.style.pointerEvents = "all";
    }
    generatePlayerTurn();
}

function generatePlayerTurn() {
    const number = Math.floor(Math.random() * 2);

    if (number == 0) {
        displayPlayerTurn.textContent = "Turn of the player X";
        displayPlayerTurn.style.color = "#ff0033";
        player_plays = true;
    }
    else {
        displayPlayerTurn.textContent = "Turn of the player O";
        displayPlayerTurn.style.color = "#00ff04";
        player_plays = false;
    }
}