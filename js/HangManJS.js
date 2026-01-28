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

const complete_missing_letters = document.getElementById("complete-word");
const choiceButton = document.getElementById("confirmChoice");
const submitLetterButton = document.getElementById("checkLetterButton");
const repeatButton = document.getElementById("repeatButton");

let selectedCategory = [];
let target = [];

// Confirming the choice of category
function confirmChoice() {
    let userChoice = categories.value.toLowerCase();

    if (CATEGORIES[userChoice]) {
      selectedCategory = CATEGORIES[userChoice];
      target = [...getRandomWord()];
      message.textContent = `You've chosen your category: ${userChoice.toUpperCase()}`;
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
            element.style.color = 'red';
        }
    });
}

// Submit button for entering missing letters.
function play() {
    let letter = complete_missing_letters.value.toUpperCase();
    const lettersQueury = document.querySelectorAll("#letters p");

    lettersQueury.forEach(element => {
        if (element.textContent === letter) {
            element.style.color = '#ff0000'
        }
        else {
            // Complete images if the gusses are wrong
        }
    })
}

// Repeat the game
function repeat() {
    selectedCategory = []
    target = []
    message.textContent = '';
    complete_missing_letters.value = '';
    complete_missing_letters.style.display = 'none'
    submitLetterButton.style.display = 'none'
    repeatButton.style.display = 'none'
    choiceButton.style.display = 'inline'
    
    // Remove displayed letters.
    let lettersQueury = document.querySelectorAll("#letters p");
    lettersQueury.forEach(element => document.getElementById('letters').removeChild(element))
    lettersQueury = '';
}

// Get a random word from the select category.
function getRandomWord() {
    const index = Math.floor(Math.random() * selectedCategory.length);
    return selectedCategory[index];
}

// Get the first hint (letter).
function getRandomLetter(target) {
    return Math.floor(Math.random() * target.length);
}