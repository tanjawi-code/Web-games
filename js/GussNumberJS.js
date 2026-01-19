let trueNumber = Math.floor((Math.random() * 10) + 1);
const message = document.getElementById("message");
const leftChances = document.getElementById("chances");
const button = document.getElementById("submit");
const repeatButton = document.getElementById("repeat");

let chances = 3;

// For submit button.
function check() {
    let userNumber = document.getElementById("number").value;
    userNumber = Number(userNumber);

    if (validInput(userNumber)) {
        message.textContent = `Please, enter a valid number.`;
    }
    else if (trueNumber > userNumber) {
        chances--;
        message.textContent = `The gussing number is bigger than your number.`;
        leftChances.textContent = `You stil have ${chances}.`;
    }
    else if (trueNumber < userNumber) {
        chances--;
        message.textContent = `The gussing number is smaller than your number.`;
        leftChances.textContent = `You stil have ${chances}.`;
    }
    else {
        message.textContent = `You've gussed the right number.`;
        leftChances.textContent = `You failed ${3 - chances} time(s)`;
        message.style.color = "#7fff00";
        leftChances.style.color = "#427015";
        repeatButton.style.display = "inline";
        button.style.display = "none";
    }

    if (chances == 0) {
        message.textContent = `You lost, The gussing number was ${trueNumber}`;
        leftChances.textContent = `You do not have any chances now.`;
        button.style.display = "none";
        repeatButton.style.display = "inline";
    }
}

// For repeating the game after winning or losing.
function repeat() {
    message.textContent = "";
    chances = 3;
    button.style.display = "inline";
    leftChances.textContent = "";
    repeatButton.style.display = "none";
    trueNumber = Math.floor((Math.random() * 10) + 1);
    message.style.color = "rgb(237, 8, 8)";
    leftChances.style.color = "rgb(237, 8, 8)";
}

// A function for checking if the input is valid.
function validInput(userNumber) {
    return  Number.isNaN(userNumber) || (userNumber <= 0 || userNumber > 10) ? true : false;
}