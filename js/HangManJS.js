const CATEGORIES = {
  fruits: ["APPLE","BANANA","ORANGE","MANGO","PINEAPPLE","STRAWBERRY","GRAPES","WATERMELON","KIWI","PAPAYA"],
  vegetables: ["CARROT","POTATO","TOMATO","ONION","CABBAGE","SPINACH","BROCCOLI","CAULIFLOWER","LETTUCE","PEAS"],
  cars: ["TOYOTA","HONDA","FORD","BMW","MERCEDES","AUDI","NISSAN", "HYUNDAI",  "KIA",  "TESLA"],
  countries: ["MOROCCO","FRANCE","SPAIN","ITALY","GERMANY","BRAZIL","CANADA","JAPAN","EGYPT","INDIA"],
  cities: ["PARIS","LONDON","TOKYO","NEWYORK","MADRID","ROME","DUBAI","SYDNEY","ISTANBUL","CAIRO"],
  animals: ["LION","TIGER","ELEPHANT","GIRAFFE","ZEBRA","MONKEY","KANGAROO","DOLPHIN","BEAR","RABBIT"],
  sports: ["FOOTBALL","BASKETBALL","TENNIS","CRICKET","BASEBALL","HOCKEY","GOLF","RUGBY","SWIMMING","BOXING"],
  movies: ["TITANIC","AVATAR","INCEPTION","GLADIATOR","FROZEN","JOKER","MATRIX","SHREK","ROCKY","MOANA"],
  professions: ["DOCTOR","TEACHER","ENGINEER","LAWYER","NURSE","PILOT","FARMER","CHEF","ARTIST","SOLDIER"],
  colors: ["RED","BLUE","GREEN","YELLOW","PURPLE","ORANGE","BLACK","WHITE","PINK","BROWN"]
};

const div_letters = document.getElementById("letters");
const categories = document.getElementById("categories");
const message = document.getElementById("message");
const div_images = document.getElementById('hangman-images')
const displayed_image = document.getElementById('displayed-image')

const complete_missing_letters = document.getElementById("complete-word");
const choiceButton = document.getElementById("confirmChoice");
const submitLetterButton = document.getElementById("checkLetterButton");
const repeatButton = document.getElementById("repeatButton");

let selectedCategory = [];
let target = [];
let trackImagesCount = 0;
let isCompleted = 0; // check the number of the found letter of the missing word.

// Confirming the choice of category
function confirmChoice() {
    let userChoice = categories.value.toLowerCase();

    if (CATEGORIES[userChoice]) {
      selectedCategory = CATEGORIES[userChoice];
      target = [...getRandomWord()];
      message.textContent = `You've chosen your category: ${userChoice.toUpperCase()}. 5 chances`;
      message.style.color = "#0b07f0";
      choiceButton.style.display = "none";
      submitLetterButton.style.display = "inline";
      complete_missing_letters.style.display = "inline";
      repeatButton.style.display = "inline";

      displayRandomLetters();
    }
}

// Part of (confirmChoice) function, it's for applying css properties on all (p).
function displayRandomLetters() {
    for (let x = 0; x < target.length; x++) {
        let letter = document.createElement("p");
        letter.textContent = target[x];
        letter.id = x;
        document.getElementById("letters").append(letter);
    }

    showFirstHint();
}

// Part of (displayRandomLetters) function, it's for showing the first hint (first letter).
function showFirstHint() {
    const showFirstLetterId = getRandomLetter(target);
    const lettersQueury = document.querySelectorAll("#letters p");

    lettersQueury.forEach((element) => {
        if (element.id != showFirstLetterId) {
            element.style.color = 'transparent';
        }
        else {
            element.style.color = '#ff0000';
        }
    });
}

// Submit button for entering missing letters.
function play() {
    let letter = complete_missing_letters.value.toUpperCase();
    const lettersQueury = document.querySelectorAll("#letters p");
    let isCorrect = false

    lettersQueury.forEach(element => {
        if (element.textContent === letter) {
            element.style.color = '#ff0000'
            isCorrect = true
        }
    })

    if (!isCorrect) {
        message.textContent = `The letter '${letter.toLowerCase()}' is wrong!!`
        message.style.color = '#f8720b'
        displayImage(trackImagesCount)
        trackImagesCount++;
    }
    else {
        checkWin(lettersQueury)
    }
}

// Display Hang man image if the user types a wrong letter. (part of play function)
function displayImage (trackImagesCount) {
    const images = ['head.png', 'left-arm.png', 'right-arm.png', 'left-leg.png', 'full-Hang-Man-Body.png']
    displayed_image.src = `images/HangManImages/${images[trackImagesCount]}`

    if ((images.length - 1) === trackImagesCount) {
        message.textContent = `You lost the game, the image now is completed. Press repeat to play again`
        message.style.color = '#ff0000'
        submitLetterButton.style.disabled = true
    }
}

// Check if the user complete all the letter before completing the Hang Man image. (part of play function)
function checkWin (lettersQueury) {
    lettersQueury.forEach((element) => { if (element.style.color == '#ff0000') isCompleted++; })
    
    if (isCompleted == (target.length - 1)) {
        message.textContent = `You won the game. You completed the missing word.!!`
        message.style.color = '#00ff08'
        submitLetterButton.style.disabled = false
    }
}

function repeat() {
    selectedCategory = []
    target = []
    trackImagesCount = 0
    isCompleted = 0
    message.textContent = '';
    complete_missing_letters.value = '';
    complete_missing_letters.style.display = 'none'
    submitLetterButton.style.display = 'none'
    repeatButton.style.display = 'none'
    choiceButton.style.display = 'inline'
    displayed_image.src = 'images/HangManImages/Empty-gallows.png'
    
    // Remove displayed letters.
    let lettersQueury = document.querySelectorAll("#letters p");
    lettersQueury.forEach(element => document.getElementById('letters').removeChild(element))
    lettersQueury = '';
}

function getRandomWord() {
    const index = Math.floor(Math.random() * selectedCategory.length);
    return selectedCategory[index];
}

function getRandomLetter(target) {
    return Math.floor(Math.random() * target.length);
}